import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr name;
  @attr email;
  @hasMany('post') posts;
}
