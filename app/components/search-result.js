import Ember from 'ember';

export default Ember.Component.extend({
    ajax: Ember.inject.service(),
    classNames: ['results'],
    initialLoad: Ember.on('didInsertElement', function() {
        this.query();
    }),
    rawResults: null,
    byScore: ['score', 'year', 'term'],
    results: Ember.computed.sort('rawResults', 'byScore'),
    searchFacet: Ember.computed('facet', function() {
        return this.getWithDefault('facet', '').split(',').map((field) => field.split(':'));
    }),
    facetTitle: Ember.computed('searchFacet', function() {
        return this.get('searchFacet.firstObject')[1];
    }),
    resultIDs: Ember.computed('rawResults', function() {
        const results = this.get('rawResults');
        if (!results) return "";
        return results.reduce((list, res) => {
            return list += res.ref + "\n";
        }, "");
    }),
    query: Ember.observer('searchFacet', 'base.searchTerm', function() {
        const q = this.getWithDefault('base.searchTerm', '').trim();
        const facet = this.get('searchFacet');
        const fields = {};
        if (facet) {
            facet.forEach((field) => {
                fields[field[0]] = field[1];
            });
        }
        const params = Ember.$.param({q, fields});
        this.set('loading', true);
        this.get('ajax').request(`http://localhost:3000?${params}`)
            .then((results) => {
                Ember.run.later(() => {
                    this.set('rawResults', results);
                });
            })
            .finally(() => this.set('loading', false))
    })
});
