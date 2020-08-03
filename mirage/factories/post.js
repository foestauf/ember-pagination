import { Factory } from 'ember-cli-mirage';
// eslint-disable-next-line no-undef
import faker from 'faker';

export default Factory.extend({
  title() {
    return faker.lorem.sentence();
  },
  body() {
    return faker.lorem.paragraph();
  },
  userId() {
    let min = 1;
    let max = 10;
    return Math.floor(Math.random() * (max - min)) + min;
  },

  afterCreate(post, server) {
    server.createList('user', 10, { post });
  },
});
