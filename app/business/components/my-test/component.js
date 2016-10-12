import Ember from 'ember';
import computed, { on } from 'ember-computed-decorators';

export default Ember.Component.extend({
	tagName: 'div',
	value: '',

	@computed('value')
	listenValue(){
		let value = this.get('value');
		console.log(value);
	},

    actions: {
		
    },

});
