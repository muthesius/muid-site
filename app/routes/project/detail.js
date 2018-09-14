import { scheduleOnce } from '@ember/runloop';
import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		return this.store.findRecord('project', params.id, { reload: true });
	},
	setupController(controller) {
		controller.set('showSlides', false);
		scheduleOnce('afterRender', this, () => controller.set('showSlides', true))
		this._super(...arguments);
	},
});
