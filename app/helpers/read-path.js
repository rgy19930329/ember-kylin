//
// Shamelessly copied from http://jsbin.com/fotuqa
//
import Ember from 'ember';

export function readPath([obj, path]/* , hash*/) {
  obj = obj || {};
  return Ember.get(obj, String(path));
}

export default Ember.Helper.helper(readPath);
