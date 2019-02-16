var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  Later_id : String,
  Article_id : Array,
  Video_id : Array,
});

var  Later = mongoose.model("Laters", UsersSchema);
module.exports = Later;
