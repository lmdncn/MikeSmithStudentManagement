import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', {path:'/'});
  this.route('about');
  this.route('contact', function() {
    this.route('phone');
    this.route('email');
  });

  this.route('post', {
    path: 'posts/:post_id'
  });
});

export default Router;
