/* globals Swiper */

import Ember from 'ember';
import Swiper from 'ember-cli-swiper/components/swiper-container';

export default Swiper.extend({
	classNames: ['slides'],
	tagName: 'section',
	pagination: true,
	loop: false,
	navigation: true,
	// keyboardControl: true,
	// mousewheelControl: true,
	willDestroyElement() {
		this._super(...arguments);
		if (this.get('swiper')) {
			this.get('swiper').destroy();
			this.set('swiper', null);
		}
	}
});
