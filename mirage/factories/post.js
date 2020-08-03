import { Factory } from 'ember-cli-mirage';
// eslint-disable-next-line no-undef
const faker = require('faker');

export default Factory.extend({
  userId() {
    let min = 1;
    let max = 10;
    return Math.floor(Math.random() * (max - min)) + min;
  },
  title() {
    return faker.lorem.sentence();
  },
  body() {
    return faker.lorem.paragraph();
  },
});
