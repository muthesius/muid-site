import Ember from 'ember';

export default function(outlet) {
	return Ember.Route.extend({
		renderTemplate(controller, model) {
			this.render({into: "application", outlet, controller, model});
		}
	})
}