import Ember from 'ember';

export default Ember.Controller.extend({
	isHome: Ember.computed.equal('currentRouteName', "index")
});
