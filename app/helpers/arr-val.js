import Ember from 'ember';

export function readArrVal([arr, index]) {
  arr = arr || [];
  return arr[index];
}

export default Ember.Helper.helper(readArrVal);
