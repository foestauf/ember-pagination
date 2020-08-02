import Model, { attr, belongsTo } from '@ember-data/model';
import { readOnly } from '@ember/object/computed';

export default class UserModel extends Model {
  @attr name;
  @belongsTo('posts') posts;

  @readOnly('user.name') userName;
}
