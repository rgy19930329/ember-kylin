import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    name(i) {
        return `person ${i}`;
    },
    headurl() {
        return faker.internet.avatar();
    }
});
