import Model, { attr, belongsTo } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr title;
  @attr body;
  @belongsTo user;
}
