var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      utente_id: {type: Schema.Types.ObjectId, ref: 'user'},
      corso_id: {type: Schema.Types.ObjectId, ref: 'course'}
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("favourite_course", schema);
  return User;
};