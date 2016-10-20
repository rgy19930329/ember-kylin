import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		add(user) {
			let users = this.get('model.users');
            let cuser = _.cloneDeep(user);
            users.pushObject(cuser);
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
