import Ember from 'ember';

export default Ember.Route.extend({
    routeName: 'section2.demo1',
    listUrl: '',

    list: [
        { valx: '1', fname: '影视' },
        { valx: '2', fname: '艺术' },
        { valx: '3', fname: '剧目' },
        { valx: '4', fname: '其它' }
    ],

    curr: { val: '3', name: '剧目' },

    model() {
        return Ember.RSVP.hash({
            list: this.get('list'),
            curr: this.get('curr'),
        });
    },

});
