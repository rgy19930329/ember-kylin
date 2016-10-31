import Service from 'ember-service';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Service.extend({
  isShown: false,

  navClassNames: computed('isShown', function() {
    const isShown = get(this, 'isShown');
    return  isShown ? 'mynav004-show' : '';
  }),

  show(context) {
      console.log(this);
      console.log(context);
    set(context || this, 'isShown', true);
  },

  hide(context) {
    set(context || this, 'isShown', false);
  },

  toggle(context) {
    if (context) context.toggleProperty('isShown')
    else this.toggleProperty('isShown');
  }
});
