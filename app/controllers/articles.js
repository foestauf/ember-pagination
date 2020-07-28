import Controller from '@ember/controller';

export default class ArticlesController extends Controller {
    queryParams = ['page', 'size'];
    page =1;
    size =5;
}
