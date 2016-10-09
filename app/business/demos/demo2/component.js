import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        press(num) {
            alert('press me' + num);
        }
    }
});
