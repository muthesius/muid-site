import Ember from 'ember';

export default Ember.Controller.extend({
	facets: [
		'degree:Bachelor',
		'degree:Master',
		'kind:Thesis',
		'keywords:Interface',
		'keywords:Medical',
	],
	updateSearch(event) {
		this.set('searchTerm', event.target.value);
		// Ember.run.scheduleOnce('afterRender', this, () => this.set('searchTerm', event.target.value));
	}
});
