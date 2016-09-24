import Ember from 'ember';

export default Ember.Route.extend({
    routeName: 'demos.demo5',
    listUrl: '',

    model() {
        let users = [
            {"id": "u001", "name": "王尼玛", "age": 23},
            {"id": "u002", "name": "张全蛋", "age": 22},
            {"id": "u003", "name": "赵铁柱", "age": 24}
        ];
        return Ember.RSVP.hash({
            users: users,
            newUser: {
                id: '',
                name: '',
                age: ''
            }
        });
    },

});
