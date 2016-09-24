import Ember from 'ember';

export default Ember.Helper.helper(function(base, rest){
    return base.concat(rest);
});
