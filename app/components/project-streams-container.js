import Component from '@ember/component';
import { on } from '@ember/object/evented';

export default Component.extend({
  tagName: 'section',
  classNames: ['streams'],

  init() {
    this._super(...arguments);
  },

  updateDistribution: on('searchresult', function() {
    console.log('searchresult received', ...arguments)
  })
});
