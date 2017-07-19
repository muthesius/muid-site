import Ember from 'ember';
const { inject: { service}, computed, computed: {sort}, on, Component, observer, run, debug } = Ember;

export default Component.extend({
    search: service(),
    // store: service(),
    classNames: ['project-stream'],
    searchResults: [],
    initialLoad: on('didInsertElement', function() {
        this.load();
    }),
    load() {
        const topic = this.get('topic');
        // TODO: Make Endpoint at server to query for records directly
        // this.get('store').query('project', {filter: this.get('topic')}).then((results) => this.set('rawResults', results));
        // To load the inital list of projects search just for the topic
        this.get('search').runQuery(topic, true).then((results) => this.set('results', results));
        // this.set('results', this.get('search').runQuery(topic));
    },
    order: ['score', 'year:desc', 'term:desc', 'kind:desc'],
    content: sort('results', 'order'),
    topicTitle: computed('topic', function() {
        return this.get('topic').match(/^\w+:\s*(\w+).*(and|or)?/i)[1];
    }),
    onSearch: observer('search.term', function() {
        const term = this.get('search.term');
        if (term && term !== '') {
            debug("Updating search results on %s: '%s'", this, this.get('search.term'));
            const topic = this.get('topic');
            run.debounce(this, () => {
                this.get('search').runQuery(topic).then((results) => this.set('searchResults', results));
            }, 100);
        } else {
            this.set('searchResults', [])
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
