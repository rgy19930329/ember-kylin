import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['img-section'],
}).reopenClass({ positionalParams: ['currentUser'] });
