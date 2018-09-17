import Component from '@ember/component';
import videojs from 'video.js'
import { observer } from '@ember/object';

export default Component.extend({
  tagName: 'video',
  classNames: ['video-js', 'vjs-default-skin', 'vjs-big-play-centered'],
  attributeBindings: ['preload', 'controls'],

  controls: 'controls',
  preload: 'metadata',

  init() {
    this._super(...arguments);
    this.onmove = this.pointerMove.bind(this)
    this.onpointerdown = this.pointerDown.bind(this);
    this.onpointerup = this.mouseUp.bind(this);
  },

  // Automaticall pause the video, when sliding to a not active position
  pauseWhenNotActiveSlide: observer('index', 'position', function() {
    const { index, position } = this.getProperties('index', 'position');
    if (index !== position) {
      if (this.player) this.player.pause();
    }
  }),

  didInsertElement() {
    this.player = videojs(this.element, {
      fluid: true,
    });
    this.element.addEventListener('pointerdown', this.onpointerdown);
    this.element.addEventListener('pointerup', this.onpointerup);
  },

  willDestroyElement() {
    if (this.player) this.player.dispose()
    this.element.removeEventListener('pointerdown', this.onpointerdown);
    this.element.removeEventListener('pointerup', this.onpointerup);
  },

  pointerDown(event) {
    this.lastX = event.clientX;
    this.lastPointerDownEvent = event;
    this.element.addEventListener('pointermove', this.onmove)
    // console.debug(this.player.paused(), event)
    this.canPlay = true;
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
    return false;
  },

  pointerMove(event) {
    const dist = Math.abs(event.clientX - (this.lastX || event.clientX));
    // console.debug("move", dist);
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
     if (dist > 10) {
      this.element.removeEventListener('pointermove', this.onmove)
      this.canPlay = false;
      const pd = new PointerEvent('pointerdown', event);
      // console.debug('ok, this might be a swipe, dispatching pointerdown event', pd);
      this.element.parentElement.dispatchEvent(pd);
      return true;
    }
  },

  mouseUp(event) {
    // console.debug('up', event)
    this.element.removeEventListener('pointermove', this.onmove)
    const dist = Math.abs(event.clientX - (this.lastX || event.clientX));
    const willSwipe = dist >= this.element.clientWidth / 2;
    // console.debug('up distance', dist, willSwipe, this.canPlay);
    if (willSwipe) {
      this.player.pause();
      this.canPlay = false;
      return;
    }
    if (!this.canPlay || dist > 10) {
      return;
    }
    // console.debug('all good... handling player')
    this.canPlay = false;
    if (this.player.paused()) this.player.play();
    else this.player.pause();
  }
});
