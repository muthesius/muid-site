import { scheduleOnce } from '@ember/runloop';
import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		return this.store.findRecord('project', params.id, { reload: true });
	},
	setupController(controller) {
    controller.set('currentSlide', 0);
    // Hide the slide show when changing the project, show when loaded
    controller.set('showSlides', false);
		scheduleOnce('afterRender', this, () => controller.set('showSlides', true))
		this._super(...arguments);
	},
});
