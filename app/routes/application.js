import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
	isMobile: service(),
	model() {
		return this.get('isMobile.any') ? {
			topics: [
				'degree:Bachelor',
				'degree:Master',
			]
		} : {
			topics: [
				'degree:BA',
				'course:Interface and degree:MA',
				'course:Medical and degree:MA',
			]
		}
	}
});
