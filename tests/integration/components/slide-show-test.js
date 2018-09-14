import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slide show', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slide-show}}`);

    assert.equal(this.element.textContent.trim(), '');

    // // Template block usage:
    // this.render(hbs`
    //   {{#slide-show}}
    //     template block text
    //   {{/slide-show}}
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
