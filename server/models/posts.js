var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  Ministry_id: String,
  Ministry_url : String
});

var Minsitry = mongoose.model("Ministry", UsersSchema);
module.exports = Minsitry;
