import Ember from 'ember';

const {
	inject: { service },
	on, observer, isNone
} = Ember;

export default Ember.Component.extend({
	ajax: service(),
	store: service(),
	initialLoad: on('didInsertElement', function() {
		this.query();
	}),
	query: observer('show', function() {
		const id = this.get('show.ref');
		if (isNone(id)) {
			this.set('empty', true);
		} else {
			this.get('store').findRecord('project', id)
				.then(project => this.set('model', project));
		}
	})

});
