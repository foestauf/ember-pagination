import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import { get } from '@ember/object';

module('Unit | Model | user', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('user', {}));
    assert.ok(model);
  });

  // test('has posts', function(assert) {
  //   const User = this.owner.lookup('service:store').modelFor('user');
  //   const relationship = get(User, 'relationshipsByName').get('post');

  //   assert.equal(relationship.key, 'post', 'has relationship with post');
  //   assert.equal(
  //     relationship.kind,
  //     'belongsTo',
  //     'kind of relationship is belongsTo'
  //   )
  // })
});
