import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({

	users: [
		{"id": "u001", "name": "王尼玛", "age": 23},
		{"id": "u002", "name": "张全蛋", "age": 22},
		{"id": "u003", "name": "赵铁柱", "age": 24}
	],

	newUser: {
		id: '',
		name: '',
		age: ''
	},

	actions: {
		add() {
			// let user = this.get('newUser');
			console.log(this.get('newUser'));
			// let users = this.get('users');
            // let cuser = _.cloneDeep(user);
            // users.pushObject(cuser);
            // user = {
            //     id: '',
            //     name: '',
            //     age: ''
            // };
            // this.set('newUser', user);
		},
        del(user) {
            let users = this.get('model.users');
            users.removeObject(user);
        }
	}
});
