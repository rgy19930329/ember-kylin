import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'ul',
    classNames: 'users-list',
}).reopenClass({ positionalParams: ['api'] });
