import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'section',
    classNames: ['user-select'],
    currentUser: null,

    actions: {
        selectUser(user) {
            this.set('currentUser', user);
        },
        clearUser() {
            this.set('currentUser', null);
        }
    }
}).reopenClass({ positionalParams: ['users'] });
