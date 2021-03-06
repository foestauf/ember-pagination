import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('posts', function () {
    this.route('post');
  });

  this.route('users', function () {
    this.route('user'), { path: '/users/:userId' };
  });
});
