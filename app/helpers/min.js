import Ember from 'ember';

export default Ember.Helper.helper(function([a, b]) {
  return Math.min(a, b);
});
