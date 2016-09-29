import Ember from 'ember';
import { on } from 'ember-computed-decorators';

export default Ember.Component.extend({
    componentName: 'ember-routable-components 的使用',
    list: [],

    @on('init')
    domInserted() {
        let _this = this;
        $.getJSON(KylinConfig.API_HOST_MOCK + '/learn/auditList', function(result) {
            if(result.state) {
                _this.set('list', result.data.list);
            }
        });
    },
});
