import Ember from 'ember';

export default Ember.Route.extend({
    routeName: 'demos.demo6',
    listUrl: '',

    model() {
        let second = 100;
        return Ember.RSVP.hash({
            second: second,
        });
    },

});
