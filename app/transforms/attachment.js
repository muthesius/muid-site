import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    for (var name in serialized) {
        const a = serialized[name];
        a.type = a.mime.match(/(\w+)\//)[1];
        a.isVideo = a.type === 'video';
        serialized[name] = Ember.Object.create(a);
    }
    return serialized;
  },

  serialize(deserialized) {
    return deserialized;
  }
});
