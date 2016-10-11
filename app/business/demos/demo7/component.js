import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({

	@computed('newUser.id')
	listenNewUser() {
		let newUser = this.get('newUser');
		console.log(newUser);
	},

	newUser: {},

	actions: {
		add(user) {
			// console.log(user);
			let users = this.get('model.users');
            let cuser = _.cloneDeep(user);
            users.pushObject(cuser);
            // user = {
            //     id: '',
            //     name: '',
            //     age: ''
            // };
            // this.set('model.newUser', user);
		},
        del(user) {
            let users = this.get('model.users');
            users.removeObject(user);
        },
		press() {
			let users = this.get('model.users');
            let cuser = {
                id: '11',
                name: '22',
                age: '333'
            };
			users.pushObject(cuser);
		}
	}
});
