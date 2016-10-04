import Ember from 'ember';
import { on } from 'ember-computed-decorators';

export default Ember.Component.extend({
    ajax: Ember.inject.service(),
    list: [],

    @on('init')
    domInserted() {
        let _this = this;
        // this.get('ajax').request(KylinConfig.API_HOST_MOCK + '/learn/auditList').then(function(result){
        //     if(result.state){
        //         _this.set('list', result.data.list);
        //     }
        // });

        // this.get('ajax').request(KylinConfig.API_HOST_MOCK + '/learn/auditList').then((result) => {
        //     if(result.state){
        //         this.set('list', result.data.list);
        //     }
        // });

        let promise = this.get('ajax').request(KylinConfig.API_HOST_MOCK + '/learn/auditList');
        promise.then((result) => {
            if(result.state){
                this.set('list', result.data.list);
            }
        });
    },
});
