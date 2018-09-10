
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import config from 'ember-get-config';

const { MOIN } = config;

moduleForComponent('attachment-url', 'helper:attachment-url', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('source', { id: 'some_thing' });

  this.set('attachment', {
    destination: 'attachments/some_image.png',
    versions: ["thumb-small.jpg"]
  });

  this.render(hbs`{{attachment-url source.id attachment}}`);

  assert.equal(
    this.$().text().trim(),
    `${MOIN.host}/doc/some_thing/some_image.png?version=thumb-small.jpg`
  );
});

