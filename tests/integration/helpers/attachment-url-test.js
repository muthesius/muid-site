import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import config from 'ember-get-config';

const { MOIN } = config;

module('helper:attachment-url', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('source', { id: 'some_thing' });

    this.set('attachment', {
      destination: 'attachments/some_image.png',
      versions: ["thumb-small.jpg"]
    });

    await render(hbs`{{attachment-url source.id attachment}}`);

    assert.equal(
      this.element.textContent.trim(),
      `${MOIN.host}/doc/some_thing/some_image.png?version=thumb-small.jpg`
    );
  });
});

