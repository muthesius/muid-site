import DS from 'ember-data';
import Ember from 'ember';
const {computed} = Ember;

export default DS.Model.extend({
	title: DS.attr(),
	abstract: DS.attr(),
	description: DS.attr(),
	authors: DS.attr(),
	tutors: DS.attr(),
	semester: DS.attr(),
	degree: DS.attr(),
	affiliation: DS.attr(),
	department: DS.attr(),
	kind: DS.attr(),
	keywords: DS.attr(),
	awards: DS.attr(),
	links: DS.attr(),

	posterLink: computed('links.poster', {
		get() {
			return `http://localhost:3000/doc/${this.get('id')}/${this.get('links.poster.destination')}`;
		}
	})
});
