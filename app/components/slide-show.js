import Swiper from 'ember-cli-swiper/components/swiper-container';
export default Swiper.extend({
	classNames: ['slides'],
	tagName: 'section',
	// loop: false,
	pagination: true,
  // navigation: true,
  speed: 100,
  keyboard: true,
  grabCursor: true,
});
