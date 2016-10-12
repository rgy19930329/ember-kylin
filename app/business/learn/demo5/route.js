import Ember from 'ember';

export default Ember.Route.extend({
    routeName: 'learn.demo5',
    url: '',

    model() {
        return {
            modelProperty: 'modelValue'
        }
    },
});
