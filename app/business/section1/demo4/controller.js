import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
	start: Ember.inject.service(), // 手动注入
	message: '手动注入',
	navmsg: '通过initializers初始化自动注入',

	actions: {
		press() {
			this.set('navmsg', 'navigation.isShown : ' + this.get('navigation').isShown); // 通过initializers初始化自动注入
			var start = this.get('start');
			this.set('message', 'start : ' + start.thisistest() + ' ' + start.isAuthenticated);
		}
	}
});
