import Component from '@ember/component';
import { on } from '@ember/object/evented';

import stickybits from 'stickybits';

export default Component.extend({
  tagName: 'header',
  initStickyHeader: on('didRender', function () {
    if (this.stickyHeader) this.stickyHeader.cleanup();
    this.set('stickyHeader', stickybits(this.element, {
      stickyBitStickyOffset: this.get('offset') * -1,
      // useStickyClasses: true,
      // stickyClass: 'sticky',
      // stuckClass: 'stuck',
      // stickyChangeClass: 'sticky-change',
      // scrollEl: this.element.parentNode,
    }));
  })
});
