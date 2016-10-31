import Ember from 'ember';
import { setProperties } from 'ember-metal/set';
import { reads } from 'ember-computed';

export default Ember.Route.extend({

    setupController(controller) {
      this._super(...arguments);

      setProperties(controller, {
        isShown: reads('navigation.isShown'),
        navClassNames: reads('navigation.navClassNames')
      });
    },

    renderTemplate() {
      this._super(...arguments);
      this.render('application/navigation', { into: 'application', outlet: 'navigation' });
    }

});
