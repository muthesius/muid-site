import Ember from 'ember';
const { inject: { service }, run : { scheduleOnce } } = Ember;

export default Ember.Controller.extend({
	facets: [
		'degree:Bachelor',
		'course:Interface',
		'course:Medical',
	],
	search: service(),
	updateSearch(event) {
		const { target : { value } } = event;
		const term = value && value.length > 2 ? value : '';
		this.set('search.term', term);
	}
});
