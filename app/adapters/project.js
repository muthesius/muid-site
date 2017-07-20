import DS from 'ember-data';
import config from 'ember-get-config';
const { MOIN } = config;

export default DS.JSONAPIAdapter.extend({
    host: MOIN.host,
    pathForType() {
        return 'doc';
    }
});
