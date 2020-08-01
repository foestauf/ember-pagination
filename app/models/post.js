import Model, { attr, belongsTo } from '@ember-data/model';
import { readOnly } from '@ember/object/computed'

export default class ArticleModel extends Model {
  @attr title;
  @attr body;
  @belongsTo('user') user;

  @readOnly('user.name') userName
}
