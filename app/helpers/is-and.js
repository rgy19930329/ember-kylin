import Ember from 'ember';

export default Ember.Helper.helper(function(args) {
    let flag = true;
    for(let value of args) {
        flag = flag && value;
    }
	return flag;
});
