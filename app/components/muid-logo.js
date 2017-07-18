import Ember from 'ember';

export default Ember.Component.extend({
	version: 'small',
	type: 'flat',
	border: false,
	linkTo: "index",
	classNames: ['muid logo'],
	classNameBindings:['border:framed'],
});
