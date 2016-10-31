import Ember from 'ember';

export default Ember.Route.extend({

    users: [
        { login: 'mojombo', avatar_url: 'https://avatars.githubusercontent.com/u/1?v=3' },
        { login: 'defunkt', avatar_url: 'https://avatars.githubusercontent.com/u/2?v=3' },
        { login: 'pjhyett', avatar_url: 'https://avatars.githubusercontent.com/u/3?v=3' },
        { login: 'wycats', avatar_url: 'https://avatars.githubusercontent.com/u/4?v=3' }
    ],

    model() {
        return this.get('users');
    },

});
