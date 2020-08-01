import Route from '@ember/routing/route';

export default class UsersUser extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model(params: { id: any; }) {
    return this.store.query('user',{userId:params.id})
  }
}
