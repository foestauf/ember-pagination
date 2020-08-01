import Route from '@ember/routing/route';

export default class PostsPost extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model() {
    return this.store.findRecord('post', 1)
  }
  // normal class body definition here
}
