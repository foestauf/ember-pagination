import Route from '@ember/routing/route';

export default class PostsPost extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model(params: any) {
    return this.store.findRecord('post', params.post_id);
  }
  // normal class body definition here
}
