import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('demos', {}, function() {
        this.route('demo1', {});
        this.route('demo2', {});
        this.route('demo3', {});
        this.route('demo4', {});
        this.route('demo5', {});
    });
});

export default Router;
