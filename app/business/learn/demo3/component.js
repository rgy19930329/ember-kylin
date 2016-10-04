import Ember from 'ember';
import { on } from 'ember-computed-decorators';

export default Ember.Component.extend({
    ajax: Ember.inject.service(),

    list: [
        { val: '1', name: '影视' },
        { val: '2', name: '艺术' },
        { val: '3', name: '民宿' },
        { val: '4', name: '歌剧' },
    ],

    category: {},

    @on('init')
    domInserted() {
        let _this = this;
        this.get('ajax').request(KylinConfig.API_HOST_MOCK + '/learn/category').then((result) => {
            _this.set('category', result.data);
        });
    },

    actions: {
        submit(category) {
            console.log(category);
            //this.get('ajax').request(KylinConfig.API_HOST_MOCK + '/learn/demo3/submit');
        }
    }
});
