import { equal, alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
	isMobile: service(),
	search: service(),
	isHome: equal('currentRouteName', "index"),
	isProject: equal('currentRouteName', "project.detail"),
	classNameBindings: ["mobile"],
	mobile: alias('isMobile.any')
});
