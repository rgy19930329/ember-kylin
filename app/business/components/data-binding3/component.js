import Ember from 'ember';
import computed, { on } from 'ember-computed-decorators';

export default Ember.Component.extend({
	tagName: 'div',
    actions: {
		change() {
			this.toggleProperty('model');
		}
    },
}).reopenClass({ 'positionalParams': ['model'] });
