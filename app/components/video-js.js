import Component from '@ember/component';
import videojs from 'video.js'

export default Component.extend({
  tagName: 'video',
  classNames: ['video-js'],
  attributeBindings: ['preload', 'controls'],

  controls: 'controls',
  preload: 'auto',

  init() {
    this._super(...arguments)
  },

  didInsertElement() {
    videojs(this.element, {
      fluid: true,
    });
  }
});
