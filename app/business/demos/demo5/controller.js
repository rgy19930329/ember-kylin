import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({

	@computed('model.firstName', 'model.lastName')
	showInfo() {
		let firstName = this.get('model.firstName'),
			lastName = this.get('model.lastName'),
			uid = this.get('model.uid'),
			age = this.get('model.age');
		return firstName + ' ' + lastName + '(uid: ' + uid + 'age: ' + age + ')';
	}

});
