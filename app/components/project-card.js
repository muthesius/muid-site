import Ember from 'ember';

const {
	inject: { service },
	on, observer, isNone
} = Ember;

export default Ember.Component.extend({
	store: service(),
	initialLoad: on('didReceiveAttrs', function() {
		this.query();
	}),
	query: observer('from', function() {
		const id = this.get('from.ref');
		if (isNone(id)) {
			this.set('empty', true);
		} else {
			this.get('store').findRecord('project', id)
				.then(project => this.set('model', project));
		}
	})

});
