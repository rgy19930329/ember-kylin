import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({

	@computed('model.second')
	listenSecond() {
		setTimeout((o) => {
			let second = this.get('model.second');
			second--;
			this.set('model.second', second);
		}, 1000);
	}

});
