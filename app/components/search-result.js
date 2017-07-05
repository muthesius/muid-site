import Ember from 'ember';

export default Ember.Component.extend({
    ajax: Ember.inject.service(),
    classNames: ['results'],
    initialLoad: Ember.on('didInsertElement', function() {
        this.query();
    }),
    rawResults: null,
    byScore: ['score'],
    results: Ember.computed.sort('rawResults', 'byScore'),
    query: Ember.observer('facet', 'base.searchTerm', function() {
        const q = this.getWithDefault('base.searchTerm', '').trim();
        const facet = this.getWithDefault('facet', '');
        const fields = {};
        if (facet) {
            facet.split(',').forEach((field) => {
                field = field.split(':');
                fields[field[0]] = field[1];
            });
        }
        const params = Ember.$.param({q, fields});
        let url = `http://localhost:3000?${params}`;
        this.set('loading', true);
        this.get('ajax').request(url)
            .then((results) => {
                Ember.run.later(() => {
                    this.set('rawResults', results);
                });
            })
            .finally(() => this.set('loading', false))
    })
});
