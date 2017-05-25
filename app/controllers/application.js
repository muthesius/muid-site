import Ember from 'ember';

export default Ember.Controller.extend({
	facets: ['BA', 'Master', 'Interface', 'Medical', 'Thesis'],
	updateSearch(event) {
		this.set('searchTerm', event.target.value);
		// Ember.run.scheduleOnce('afterRender', this, () => this.set('searchTerm', event.target.value));
	}
});
