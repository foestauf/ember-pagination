import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | pagination', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test-articles-header]').exists();
    assert.dom('[data-test-articles-header]').hasText('User posts');
    assert.dom('.pagination-centered').exists();
  });

  test('clicking portal button views modal', async assert => {
    await visit('/');
    await click('[data-test-portal-open]');
    assert.dom('.ember-modal-overlay').exists();
    assert.dom('[data-test-post-user-info').exists();
    assert.dom('[data-test-modal-title').exists();
    assert.dom('[data-test-modal-body').exists();
    assert.dom('[data-test-modal-close-button]').exists();
    assert.dom('[data-test-modal-close-portal-button]').exists();
    await click('[data-test-modal-close-button]');
    assert.dom('.ember-modal-overlay').doesNotExist();
  });
});
