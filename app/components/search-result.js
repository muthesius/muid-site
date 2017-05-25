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
		const term = (this.get('base.searchTerm') || '').trim();
		const facet = this.get('facet').toLowerCase().trim();
		let url = `http://localhost:3000?q=${facet} ${term}`;
		this.set('loading', true);
		this.get('ajax').request(url)
		.then((results) => {
			Ember.run.later(() => {
				this.set('rawResults', results);
			});
		}).finally(() => this.set('loading', false))
	})
});
