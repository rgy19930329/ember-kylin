import Ember from 'ember';

export function readObjVal([obj, key]) {
    obj = obj || {};
    return Ember.get(obj, String(key));
}

export default Ember.Helper.helper(readObjVal);
