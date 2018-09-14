import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | project-streams-container', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{project-streams-container}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#project-streams-container}}
      {{/project-streams-container}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
