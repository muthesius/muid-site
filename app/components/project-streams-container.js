import Component from '@ember/component';
import { on } from '@ember/object/evented';

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
  topicStats: {},
  init() {
    this._super(...arguments);
    this.topicStats = {};
  },

  registerWindowResize: on('didInsertElement', function() {
    window.addEventListener('resize', this.computeOffsets.bind(this), false);
  }),

  removeWindowResize: on('willDestroy', function() {
    window.removeEventListener('resize', this.computeOffsets.bind(this));
  }),

  actions: {
    updateOffsets(topic, count) {
      this.topicStats[topic] = count;
      this.computeOffsets();
    },
  },

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
    this.set('offsets', stats);
  }
});
