import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [1,2,3]; //this.store.query('project', {featured: true});
	}
});
