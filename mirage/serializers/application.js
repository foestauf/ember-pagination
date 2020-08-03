import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { posts: payload };
    console.log(payload);

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});
