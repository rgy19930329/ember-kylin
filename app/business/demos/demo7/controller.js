import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		add(user) {
			let users = this.get('model.users');
            users.pushObject(user);
            user = {
                id: '',
                name: '',
                age: ''
            };
            this.set('model.newUser', user);
		},
        del(user) {
            let users = this.get('model.users');
            users.removeObject(user);
        }
	}
});
