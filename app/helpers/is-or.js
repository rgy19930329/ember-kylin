import Ember from 'ember';

export default Ember.Helper.helper(function(args) {
    let flag = false;
    // for(let i = 0; i < args.length; i++) {
    //     if(args[i] === true){
    //         flag = true;
    //         break;
    //     }
    // }

    // for(let i = 0; i < args.length; i++) {
    //     flag = flag || args[i];
    // }

    for(let value of args) {
        flag = flag || value;
    }
	return flag;
});
