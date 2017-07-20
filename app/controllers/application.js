import Ember from 'ember';

export default Ember.Controller.extend({
	isMobile: Ember.inject.service(),
	search: Ember.inject.service(),
	isHome: Ember.computed.equal('currentRouteName', "index"),
	isProject: Ember.computed.equal('currentRouteName', "project.detail"),
	classNameBindings: ["mobile"],
	mobile: Ember.computed.alias('isMobile.any')
});
