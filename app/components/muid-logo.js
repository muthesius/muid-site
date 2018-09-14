import Component from '@ember/component';

export default Component.extend({
	version: 'small',
	type: 'flat',
	border: false,
	linkTo: "index",
	classNames: ['muid logo'],
	classNameBindings:['border:framed'],
});
