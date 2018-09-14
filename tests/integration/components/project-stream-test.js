import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | project stream', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#project-stream}}
      {{/project-stream}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
