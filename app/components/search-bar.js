import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	classNames: ['muid', 'search-bar'],
	search: service(),
	updateSearch(event) {
		const { target : { value } } = event;
		const term = value && value.length > 2 ? value : '';
		this.set('search.term', term);
	}
});
