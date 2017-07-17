import Ember from 'ember';
const { run : { scheduleOnce } } = Ember;

export default Ember.Controller.extend({
	facets: [
		'degree:Bachelor',
		// 'degree:Master,kind:Project',
		// 'kind:Thesis',
		'course:Interface',
		'course:Medical',
		// 'course:Medical,kind:Project',
	],
	updateSearch(event) {
		const { target : { value } } = event;
		const term = value && value.length > 2 ? value : '';
		scheduleOnce('afterRender', this, () => {
			this.set('searchTerm', term);
		});
	}
});
