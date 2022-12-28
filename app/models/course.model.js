var mongoosee = require('mongoose');
var Schemaa = mongoosee.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nome: String,
      numero_cfu: Number,
      valutazione_corso: Number,
      attivo: Number,
      utente_id: {type: Schemaa.Types.ObjectId, ref: 'User'}
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Course = mongoose.model("Course", schema);
  return Course;
};