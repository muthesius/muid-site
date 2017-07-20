import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('project', params.id, { reload: true });
	},
	setupController(controller) {
		controller.set('showSlides', false);
		Ember.run.scheduleOnce('afterRender', controller, function() {
			this.set('showSlides', true);
		});
		this._super(...arguments);
	},
});
