import Ember from 'ember';
import { on } from 'ember-computed-decorators';

export default Ember.Component.extend({
    componentName: 'ember-routable-components 的使用',
    remodal: Ember.inject.service(),
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

    didInsertElement() {
        $('.J-press-me').on('click', function() {
            alert('press me');
        });
        $('tbody').on('click', 'tr', function() {
            var $tar = $(this);
            console.log($tar.index());
        });
    },

    actions: {
        press(item) {
            this.set('item', item);
            this.get('remodal').open('learn-test-modal').then((modal) => {
                this.set('modal', modal);
            });
        }
    }
});
