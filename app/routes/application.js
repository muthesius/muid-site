import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			topics: [
				'degree:Bachelor',
				'course:Interface',
				'course:Medical',
			]
		};
	}
});
