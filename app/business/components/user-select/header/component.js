import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'header',
}).reopenClass({ positionalParams: ['currentUser'] });
