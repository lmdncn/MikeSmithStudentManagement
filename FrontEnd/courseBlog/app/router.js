import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
   this.route('home', {path:'/'});
   this.route('home', {path:'/home'});
  this.route('about', {path:'/about'});
  this.route('list', {path:'/list'});
});

export default Router;
