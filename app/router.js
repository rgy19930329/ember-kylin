import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('index');
    this.route('demos', {}, function() {
        this.route('demo1'); // 数据遍历 + if + helper (add-one)
        this.route('demo2'); // actions 添加事件
        this.route('demo3'); // 自定义组件 mylink-to
        this.route('demo4'); // helper (add-one)
        this.route('demo5'); // 数据的双向绑定
        this.route('demo6'); // 倒计时 计算属性
        this.route('demo7'); // userlist
        this.route('demo8'); // 单、双向绑定总结
    });
    this.route('section1', {}, function() {
        this.route('demo1'); // 自定义组件 my-radios
        this.route('demo2'); // ember-sandbox 003
        this.route('demo3'); // initializers
        this.route('demo4'); // services
        this.route('demo5'); // ember-sandbox 004
        this.route('demo6', {}, function() {
            this.route('competitions', { 'path': 'competitions/:id' });
        }); // Ember-data
        this.route('demo7'); // 单、双向数据绑定演示
    });
});

export default Router;
