import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | project card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{project-card}}`);

    assert.equal(this.element.textContent.trim(), 'Could not load Project');

    // Template block usage:
    await render(hbs`
      {{#project-card}}
      {{/project-card}}
    `);

    assert.equal(this.element.textContent.trim(), 'Could not load Project');
  });
});
