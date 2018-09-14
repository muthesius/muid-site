import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { on } from '@ember/object/evented';
import { observer } from '@ember/object';
import { isNone } from '@ember/utils';

export default Component.extend({
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
          this.set('content', project)
        });
		}
	})

});
