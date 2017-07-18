import Ember from 'ember';
import Search from 'muid/services/search';
import parser from 'npm:search-parser';
const { inject: { service} } = Ember;

export default Ember.Component.extend({
    search: service(),
    // store: service(),
    classNames: ['results'],
    initialLoad: Ember.on('didReceiveAttrs', function() {
        const topic = this.get('topic');
        // TODO: Make Endpoint at server to query for records directly
        // this.get('store').query('project', {filter: this.get('topic')}).then((results) => {
        this.get('search').runQuery(topic).then((results) => this.set('rawResults', results));
    }),
    byScore: ['score', 'year:desc', 'term:desc', 'kind:desc'],
    results: Ember.computed.sort('rawResults', 'byScore'),
    topicTitle: Ember.computed('topic', function() {
        return this.get('topic').match(/^\w+:\s*(\w+).*(and|or)?/i)[1];
    }),
    onSearch: Ember.observer('search.term', function() {
        console.log("....", this.get('search.term'));
    }),
    resultIDs: Ember.computed('projects', function() {
        const results = this.get('projects');
        if (!results) return "";
        return results.reduce((list, res) => {
            return list += res.year + " - " + res.ref + "\n";
        }, "");
    }),
});
