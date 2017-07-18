import Ember from 'ember';
const { inject: { service }, run : { scheduleOnce } } = Ember;

export default Ember.Component.extend({
	classNames: ['muid', 'search-bar'],
	search: service(),
	updateSearch(event) {
		const { target : { value } } = event;
		const term = value && value.length > 2 ? value : '';
		this.set('search.term', term);
	}
});
