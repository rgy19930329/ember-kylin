import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
    host: 'http://api.football-data.org',
    namespace: 'v1',
    headers: {
        'x-auth-token': 'b77f872e2b7d445fa2bb37c335f154de'
    }
});
