import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        press(num) {
            alert('press me' + num);
        }
    }
});
