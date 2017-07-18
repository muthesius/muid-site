import Ember from 'ember';
import config from 'ember-get-config';
import parser from 'npm:search-parser';

const { EmberENV: { MOIN } } = config;
const { computed, inject, $, RSVP: {Promise} } = Ember;

export default Ember.Service.extend({
    url: MOIN.host,
    ajax: inject.service(),
    term: '',
    query: computed('term', function() {
        return this.parseQuery();
    }),
    parseQuery(ext) {
        let term = this.getWithDefault('term', '');
        const parsed = parser.parse(ext || '');
        return parsed.getWithDefault('firstObject', []).reduce((query, term) => {
            for (const attr in term) {
                if (!term.hasOwnProperty(attr)) continue;
                if (attr === 'freetext') query.q += " " + term.freetext.include;
                else {
                    query.fields = query.fields || {}
                    query.fields[attr] = term[attr].include;
                }
            }
            return query;
        }, {q:term});
    },
    runQuery(term) {
        const query = this.parseQuery(term)
        if (!query) return Promise.reject();
        const params = $.param(query);
        this.set('loading', true);
        return this.get('ajax').request(`${this.get('url')}?${params}`)
            .finally(() => this.set('loading', false))
    }
});
