import Service from '@ember/service';
import config from 'ember-get-config';
import parser from 'search-parser';
import fetch from 'fetch';
import { computed } from '@ember/object';
import { Promise } from 'rsvp';
const { MOIN } = config;

const toSearchParams = (query, prefix = null) => {
  return Object.keys(query).reduce((prev, key, i) => {
    let data = query[key];
    switch (typeof data) {
      case 'object':
        data = data instanceof Array
          ? data.map(encodeURIComponent).join(',')
          : toSearchParams(data, key);
        break;
      case 'string':
      case 'number':
        data = `${key}=${encodeURIComponent(data)}`;
        break;
    }
    const param = prefix ? `${prefix}${data.replace(key, `[${key}]`)}` : data;
    return `${prev}${i !== 0 ? '&' : ''}${param}`;
  }, '');
}

export default Service.extend({
  url: MOIN.host,
  term: '',
  // TODO: Check where this is used, propably remove it
  query: computed('term', function () {
    return this.parseQuery();
  }),
  parseQuery(ext, plain = false) {
    const term = plain ? '' : this.getWithDefault('term', '');
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
    }, { q: term });
  },
  runQuery(ext, plain = false) {
    const query = this.parseQuery(ext, plain);
    if (!query) return Promise.reject();
    const params = toSearchParams(query);
    this.set('loading', true);
    return fetch(`${this.get('url')}?${params}`)
      .then(result => result.json())
      .finally(() => this.set('loading', false))
  }
});
