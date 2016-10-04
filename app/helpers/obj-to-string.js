import Ember from 'ember';

export default Ember.Helper.helper(function([obj]) {
	return JSON.stringify(obj);
});
