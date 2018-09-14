import Component from '@ember/component';
import stickybits from 'stickybits';

export default Component.extend({
  tagName: 'header',
  didRender() {
    this._super(...arguments);
    if (this.stickyHeader) this.stickyHeader.cleanup();
    this.set('stickyHeader', stickybits(this.element, {
      stickyBitStickyOffset: this.get('offset') * -1,
      // useStickyClasses: true,
      // stickyClass: 'sticky',
      // stuckClass: 'stuck',
      // stickyChangeClass: 'sticky-change',
      // scrollEl: this.element.parentNode,
    }));
  }
});
