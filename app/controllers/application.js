import Ember from 'ember';

export default Ember.Controller.extend({
	facets: [
		'degree:Bachelor,kind:Project',
		'degree:Master,kind:Project',
		'kind:Thesis',
		'keywords:Interface,kind:Project',
		'keywords:Medical,kind:Project',
	],
	updateSearch(event) {
		this.set('searchTerm', event.target.value);
		// Ember.run.scheduleOnce('afterRender', this, () => this.set('searchTerm', event.target.value));
	}
});
