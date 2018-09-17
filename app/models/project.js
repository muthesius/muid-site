import { filterBy } from '@ember/object/computed';
import EmberObject, { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	abstract: DS.attr(),
	description: DS.attr(),
	authors: DS.attr(),
	tutors: DS.attr(),
	term: DS.attr(),
	degree: DS.attr(),
	course: DS.attr(),
	affiliation: DS.attr(),
	department: DS.attr(),
	kind: DS.attr(),
	keywords: DS.attr(),
	links: DS.attr('attachment'),
	poster: DS.attr(),
	media: computed('links', 'links.[]', function() {
		const values = [];
		const links = this.get('links');
		for (const id in links) {
			if (links.hasOwnProperty(id)) {
        const a = links[id];
				if (a.get('type') === 'image' || a.get('type') === 'video') {
					values.push(a);
				}
			}
		}
		return values;
	}),
	images: filterBy('media', 'type', 'image'),
	posterLink: computed('links.poster', 'poster', {
		get() {
      return EmberObject.create(this.get('links.poster') || this.get('poster'));
		}
	})
});
