import Ember from 'ember';

export default Ember.Controller.extend({
	isProject: Ember.computed.equal('currentRouteName', "project.detail")
});
