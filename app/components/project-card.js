import Ember from 'ember';

const {
	inject: { service },
	on, observer, isNone
} = Ember;

export default Ember.Component.extend({
	classNames: ['project','card'],
	store: service(),
	initialLoad: on('didReceiveAttrs', function() {
		this.query();
	}),
	query: observer('from', function() {
		const id = this.get('from.ref');
		if (isNone(id)) {
			this.set('empty', true);
		} else {
			this.get('store')
				.findRecord('project', id, {include:"title,authors,abstract,poster"})
				.then(project => {
          console.log("projectk poster link", project.posterLink)
          // this.content = project
          this.set('content', project)
        });
		}
	})

});
