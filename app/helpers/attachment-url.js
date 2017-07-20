import Ember from 'ember';
import config from 'ember-get-config';

const { MOIN } = config;

function getLink(link, id, version = "thumb-small") {
	const filename = link.destination.replace(/attachment(s)?\/?/,'');
	return `${MOIN.host}/doc/${id}/${filename}?version=${version}`;
}
export function attachmentUrl(params/*, hash*/) {
	const project = params[0];
	const medium = params[1];
	const version = medium.versions.filter(v => v.indexOf(params[2] || "thumb-small")>=0)[0];
	return getLink(medium, project.get('id'), version);
}

export default Ember.Helper.helper(attachmentUrl);
