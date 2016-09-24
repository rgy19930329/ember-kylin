import Ember from 'ember';

export default Ember.Route.extend({
    routeName: 'demos.demo1',
    listUrl: '',

    model() {
        let users = [];
        users.push({'id': 'u001', 'name': '王尼玛', 'age': 23});
        users.push({'id': 'u002', 'name': '张全蛋', 'age': 22});
        users.push({'id': 'u003', 'name': '赵铁柱', 'age': 24});
        return users;
        // return Ember.RSVP.hash({
        //     users: users,
        //     appid: 'cy671520',
        // });
    },

});
