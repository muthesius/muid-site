import Ember from 'ember';

export default Ember.Route.extend({
	isMobile: Ember.inject.service(),
	model() {
		return this.get('isMobile.any') ? {
			topics: [
				'degree:Bachelor',
				'degree:Master',
			]
		} : {
			topics: [
				'degree:Bachelor',
				'course:Interface',
				'course:Medical',
			]			
		}
	}
});
