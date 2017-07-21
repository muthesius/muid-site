import Ember from 'ember';
import config from 'ember-get-config';

const { MOIN } = config;

export function attachmentUrl(params) {
	try {
		const project = Ember.Object.create(params[0]);
		const medium = Ember.Object.create(params[1]);
		const version = medium.versions.filter(v => v.indexOf(params[2] || "thumb-small")>=0)[0];
		const filename = medium.destination.replace(/attachment(s)?\/?/,'');
		return `${MOIN.host}/doc/${project.get('id')}/${filename}?version=${version}`;
	} catch(err) {
		Ember.debug(err + "")
		return "";
	}
}

export default Ember.Helper.helper(attachmentUrl);
