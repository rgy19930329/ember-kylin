import Ember from 'ember';

export default Ember.Helper.helper(function([value, multiplier]) {
  return value * multiplier;
});
