import Ember from 'ember';
import { on } from 'ember-computed-decorators';

export default Ember.Component.extend({
    list: [],

    @on('init')
    domInserted() {
        let _this = this;
        $.getJSON(KylinConfig.API_HOST_MOCK + '/api/posts', function(result) {
            _this.set('list', result.data);
        });
    },

    actions: {

    }
});
