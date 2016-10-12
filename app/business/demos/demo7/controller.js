import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({

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
