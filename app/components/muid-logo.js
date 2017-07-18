import Ember from 'ember';

export default Ember.LinkComponent.extend({
	version: 'small',
	type: 'flat',
	border: false,
	classNames: ['muid logo'],
	classNameBindings:['border:framed']
});
