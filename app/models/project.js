import DS from 'ember-data';
import Ember from 'ember';
import config from 'ember-get-config';
import {attachmentUrl} from 'muid/helpers/attachment-url';

const { EmberENV: { MOIN } } = config;
const {computed} = Ember;

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
	media: computed('links', function() {
		return Object.values(this.get('links'))
				.filter(a => a.type === 'image' || a.type === 'video');
	}),
	images: computed.filterBy('media', 'type', 'image'),
	posterLink: computed('links.poster', 'poster', {
		get() {
			const link = Ember.Object.create(this.get('links.poster') || this.get('poster'));
			return attachmentUrl([this, link]);
		}
	})
});
