import DS from 'ember-data';
import config from 'ember-get-config';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

const { MOIN } = config;

export default DS.JSONAPIAdapter.extend(AdapterFetch, {
    host: MOIN.host,
    pathForType() {
        return 'doc';
    }
});
