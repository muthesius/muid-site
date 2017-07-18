import Ember from 'ember';
const { inject: { service}, computed: {sort} } = Ember;
const ProjectStream = Ember.Component.extend({
    search: service(),
    // store: service(),
    classNames: ['results'],
    initialLoad: Ember.on('didReceiveAttrs', function() {
        this.load();
    }),
    load() {
        const topic = this.get('topic');
        // TODO: Make Endpoint at server to query for records directly
        // this.get('store').query('project', {filter: this.get('topic')}).then((results) => this.set('rawResults', results));
        this.get('search').runQuery(topic).then((results) => this.set('results', results));
        // this.set('results', this.get('search').runQuery(topic));
    },
    order: ['score', 'year:desc', 'term:desc', 'kind:desc'],
    content: sort('results', 'order'),
    topicTitle: Ember.computed('topic', function() {
        return this.get('topic').match(/^\w+:\s*(\w+).*(and|or)?/i)[1];
    }),
    onSearch: Ember.observer('search.term', function() {
        Ember.run.debounce(this, () => this.load());
        Ember.debug("Updating search results on %s: '%s'", this, this.get('search.term'));
    }),
    resultIDs: Ember.computed('content', function() {
        const results = this.get('content');
        if (!results) return "";
        return results.reduce((list, res) => {
            return list += res.year + " - " + res.ref + "\n";
        }, "");
    }),
});

export default ProjectStream;
