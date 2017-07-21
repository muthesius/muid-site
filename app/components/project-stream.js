import Ember from 'ember';
const { inject: { service}, computed, computed: {sort}, on, Component, observer, run, debug } = Ember;

export default Component.extend({
    search: service(),
    // store: service(),
    classNames: ['project-stream'],
    searchResults: [],
    classNameBindings: ['noResults'],
    initialLoad: on('didInsertElement', function() {
        this.load();
    }),
    noResults: computed.empty('results'),
    load() {
        const topic = this.get('topic');
        // TODO: Make Endpoint at server to query for records directly
        // this.get('store').query('project', {filter: this.get('topic')}).then((results) => this.set('rawResults', results));
        // To load the inital list of projects search just for the topic
        this.get('search').runQuery(topic, true).then((results) => this.set('results', results));
    },
    doSearch() {
        const topic = this.get('topic');
        this.get('search').runQuery(topic).then((results) => {
            this.set('results', results)
        });
    },
    order: ['score', 'year:desc', 'term:desc', 'kind:desc'],
    content: sort('results', 'order'),
    topicTitle: computed('topic', function() {
        return this.get('topic').match(/^\w+:\s*(\w+).*(and|or)?/i)[1];
    }),
    onSearch: observer('search.term', function() {
        const term = this.get('search.term');
        if (term && term !== '') {
            debug("Searching for", term)
            run.debounce(this, this.doSearch, 100);
        } else {
            debug("No search, load projects");
            run.debounce(this, this.load, 100);
        }
    }),
    resultIDs: Ember.computed('content', function() {
        const results = this.get('content');
        if (!results) return "";
        return results.reduce((list, res) => {
            return list += res.year + " - " + res.ref + "\n";
        }, "");
    }),
});
