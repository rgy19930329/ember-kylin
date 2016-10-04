import Ember from 'ember';

export default Ember.Helper.helper(function([value, defaultValue]) {
	return (value != null && value != '') ? value : defaultValue;
});
