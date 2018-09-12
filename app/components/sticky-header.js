import Component from '@ember/component';
import { on } from '@ember/object/evented';

import stickybits from 'stickybits';

export default Component.extend({
  tagName: 'header',
  initStickyHeader: on('didInsertElement', function () {
    this.set('stickyHeader', stickybits(this.element, {
      stickyBitsStickyOffset: 0,
      // useStickyClasses: false,
      // stickyClass: 'sticky',
      // stuckClass: 'stuck',
      // stickyChangeClass: 'sticky-change',
      // scrollEl: this.element.parentNode,
    }));
  }),
  ensureStickyHeader: on('didRender', function () {
    if (this.stickyHeader) this.stickyHeader.update();
  }),
  destroyStickHeader: on('willDestroy', function () {
    if (this.stickyHeader) this.stickyHeader.cleanup();
  }),

});
