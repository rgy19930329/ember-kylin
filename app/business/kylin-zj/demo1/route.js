import Ember from 'ember';

export default Ember.Route.extend({
    routeName: 'learn.demo1',
    url: '',

    model() {
        return {
            modelProperty: 'modelValue'
        }
    },
});
