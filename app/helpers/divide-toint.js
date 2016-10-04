import Ember from 'ember';

export default Ember.Helper.helper(function([value, divisor]) {
  return parseInt(value / divisor);
});
