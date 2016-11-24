import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({
    normalizeArrayResponse(store, model, payload, id, type) {
        payload = payload.map(entry => {
            const { _links: links, ...attrs } = entry;
            return { links, ...attrs };
        });

        return this._super(store, model, payload, id, type);
    }
});
