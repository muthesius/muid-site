import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, observer } from '@ember/object';
import { run } from '@ember/runloop';
import { sort, empty } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';

const debug = () => {}; //console.debug.bind(console)

export default Component.extend({
    search: service(),
    classNames: ['project-stream'],
    classNameBindings: ['noResults'],
    content: sort('results', 'order'),

    init() {
      this._super(...arguments);
      this.searchResults = new Array();
      this.order = ['score', 'year:desc', 'term:desc', 'kind:desc'];
    },

    updateOffset: observer('results.length', function() {
      if (!this.onsearch || typeof this.onsearch !== 'function') return;
      this.onsearch(
        this.topic,
        this.getWithDefault('results.length', 0)
      );
    }),

    offset: computed('offsets', {
      get() {
        const offset = this.getWithDefault('offsets', {})[this.get('topic')] || 0;
        try {
          this.element.style.paddingTop = `${offset}px`;
        } catch (_) {
          // not yet in DOM
        }
        return offset;
      }
    }),

    noResults: empty('results'),
    didInsertElement() {
      this._super(...arguments);
      const topic = this.get('topic');
      this.get('search').runQuery(topic, true).then((results) => this.set('results', results));
    },

    doSearch() {
        const topic = this.get('topic');
        this.get('search').runQuery(topic).then((results) => this.set('results', results));
    },

    topicTitle: computed('topic', function() {
      if (isEmpty(this.get('topic'))) return '';
      return this.get('topic').match(/^\w+:\s*(\w+).*(and|or)?/i)[1];
    }),
    onSearchTermChanged: observer('search.term', function() {
        const term = this.get('search.term');
        if (term && term !== '') {
            debug("Searching for", term)
            run.debounce(this, this.doSearch, 100);
        } else {
            debug("No search, load projects");
            run.debounce(this, this.load, 100);
        }
    }),
    // TODO: Remove this property; just for debugging
    resultIDs: computed('content', function() {
        const results = this.get('content');
        if (!results) return "";
        return results.reduce((list, res) => {
            return list += res.year + " - " + res.ref + "\n";
        }, "");
    }),
});
