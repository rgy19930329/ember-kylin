import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
	actions: {
		press(val) {
			alert(JSON.stringify(val));
		}
	}
});
