import CompetitionSerializer from '../competition/serializer';

export default CompetitionSerializer.extend({
    attrs: {
        logoUrl: 'crestUrl'
    },
    normalizeArrayResponse(store, model, payload, id, type) {
        payload = payload.teams.map(entry => {
            const { _links: links, ...attrs } = entry;
            return { links, ...attrs };
        });

        return this._super(store, model, payload, id, type);
    },
    extractId(model, hash) {
        return hash.links.self.href.split('/').pop();
    }
});
