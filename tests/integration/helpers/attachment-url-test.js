
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('attachment-url', 'helper:attachment-url', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{attachment-url inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

