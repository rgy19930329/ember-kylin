import Ember from 'ember';

export default Ember.Route.extend({
    routeName: 'demos.demo5',
    listUrl: '',

    model() {
        return Ember.RSVP.hash({
            uid: 'u001',
            firstName: '王',
            lastName: '尼玛',
            age: 23,
        });
    },

});
