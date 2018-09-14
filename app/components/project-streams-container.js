import Component from '@ember/component';
import { computed } from '@ember/object';
import { assign } from '@ember/polyfills';

const clamp = (min, max, value) => {
  if (value <= min) return min;
  else if (value >= max) return max;
  else return value;
}

const position = (min, max, value) => {
  value = clamp(min, max, value);
  return (value - min) / (max - min * 1.0);
}

export default Component.extend({
  tagName: 'section',
  classNames: ['streams'],

  init() {
    this._super(...arguments);
    this.topicStats = {};
  },

  didInsertElement() {
    this._super(...arguments);
    window.addEventListener('resize', this.computeOffsets.bind(this), false);
  },

  willDestroy() {
    this._super(...arguments);
    window.removeEventListener('resize', this.computeOffsets.bind(this));
  },

  actions: {
    updateOffsets(topic, count) {
      this.topicStats[topic] = count;
      this.computeOffsets();
    },
  },

  useScale: true,
  offsets: computed('_offsets', 'useScale', {
    get() {
      const offsets = this.get('_offsets');
      if (this.get('useScale')) {
        return offsets;
      }
      const nullOffset = assign({}, offsets);
      const scale = this.element ? this.element.getBoundingClientRect().height : 1;
      for (const keytopic in nullOffset) {
        if (nullOffset.hasOwnProperty(keytopic)) {
          nullOffset[keytopic] = scale * 0.8;
        }
      }
      return nullOffset;
    }
  }),

  computeOffsets() {
    const scale = this.element ? this.element.getBoundingClientRect().height : 1;
    const scores = Object.values(this.topicStats).sort((a,b) => a - b)
    const minScore = scores.shift() || 0;
    const maxScore = scores.length === 0 ? minScore : scores.pop() || 0;
    const stats = {};
    for (const topic in this.topicStats) {
      const pos = 1 - position(minScore, maxScore, this.topicStats[topic]);
      stats[topic] = Math.floor(scale * 2/8 + scale * 3/8 * pos)
    }
    this.set('_offsets', stats);
  }
});
