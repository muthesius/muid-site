import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, observer } from '@ember/object';
import { on } from '@ember/object/evented';
import { run } from '@ember/runloop';
import { sort } from '@ember/object/computed';

import stickybits from 'stickybits';

const debug = console.debug.bind(console)

export default Component.extend({
    search: service(),
    // store: service(),
    classNames: ['project-stream'],
    searchResults: [],
    classNameBindings: ['noResults'],

    initStickyHeader: on('didInsertElement', function() {
      this.set('stickyHeader', stickybits(this.element.firstElementChild, {
        stickyBitsStickyOffset: 0,
        // useStickyClasses: false,
        // stickyClass: 'sticky',
        // stuckClass: 'stuck',
        // stickyChangeClass: 'sticky-change',
        // scrollEl: this.element,
      }));
    }),
    ensureStickyHeader: on('didRender', function() {
      if (this.stickyHeader) this.stickyHeader.update();
    }),
    destroyStickHeader: on('willDestroy', function() {
      if (this.stickyHeader) this.stickyHeader.cleanup();
    }),

    noResults: computed.empty('results'),
    load: on('didInsertElement', function() {
        const topic = this.get('topic');
        this.get('search').runQuery(topic, true).then((results) => this.set('results', results));
    }),

    doSearch() {
        const topic = this.get('topic');
        this.get('search').runQuery(topic).then((results) => this.set('results', results));
    },
    order: ['score', 'year:desc', 'term:desc', 'kind:desc'],
    content: sort('results', 'order'),
    topicTitle: computed('topic', function() {
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
