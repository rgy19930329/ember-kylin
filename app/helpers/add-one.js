import Ember from 'ember';

export default Ember.Helper.helper(function(base){
    return +base + 1;
});
