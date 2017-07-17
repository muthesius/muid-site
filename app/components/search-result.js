import Ember from 'ember';
import Search from 'muid/services/search';
import parser from 'npm:search-parser';
const { inject: { service} } = Ember;

export default Ember.Component.extend({
    search: service(),
    store: service(),
    classNames: ['results'],
    initialLoad: Ember.on('didReceiveAttrs', function() {
        // TODO: Make Endpoint at server to query for records directly
        // this.get('store').query('project', {filter: this.get('facet')}).then((results) => {
        this.get('search').runQuery(this.get('facet')).then((results) => {
            this.set('rawResults', results);
        });
    }),
    byScore: ['score', 'year:desc', 'term:desc', 'kind:desc'],
    results: Ember.computed.sort('rawResults', 'byScore'),
    facetTitle: Ember.computed('facet', function() {
        return this.get('facet').match(/^\w+:\s*(\w+).*(and|or)?/i)[1];
    }),
    resultIDs: Ember.computed('results', function() {
        const results = this.get('results');
        if (!results) return "";
        return results.reduce((list, res) => {
            return list += res.year + " - " + res.ref + "\n";
        }, "");
    }),
});
