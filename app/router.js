import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('project', {path: 'p'}, function() {
    this.route('detail', {path: ':id'});
  });
  this.route('imprint');
  this.route('apply');
  this.route('news');
  this.route('about');
  this.route('contact');
});

export default Router;
