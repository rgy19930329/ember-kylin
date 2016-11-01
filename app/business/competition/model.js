import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
    caption: attr('string'),
    league: attr('string'),
    teams: hasMany('team', { async: true }),
});
