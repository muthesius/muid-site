import Ember from 'ember';
import config from 'ember-get-config';
import { isEmpty } from '@ember/utils';

const { MOIN } = config;

export function attachmentUrl(params) {
	try {
    const project = params[0];
    if (isEmpty(project)) throw new Error('Attchment URL must get a project id')
		const medium = Ember.Object.create(params[1]);
		const version = medium.versions.filter(v => v.indexOf(params[2] || "thumb-small")>=0)[0];
    const filename = medium.destination.replace(/attachment(s)?\/?/,'');
    const url = `${MOIN.host}/doc/${project}/${filename}?version=${version}`;
    return url;
	} catch(err) {
		// console.debug(err)
		return "";
	}
}

export default Ember.Helper.helper(attachmentUrl);
