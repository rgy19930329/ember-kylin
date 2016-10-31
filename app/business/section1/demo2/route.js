import Ember from 'ember';

export default Ember.Route.extend({
    routeName: 'demos.demo9',
    listUrl: '',

    list: [
        { val: '1', name: '影视' },
        { val: '2', name: '艺术' },
        { val: '3', name: '剧目' },
        { val: '4', name: '其它' }
    ],

    curr: { val: '3', name: '剧目' },

    model() {
        return Ember.RSVP.hash({
            list: this.get('list'),
            curr: this.get('curr'),
        });
    },

});
