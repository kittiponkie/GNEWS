var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  Follow_id : String,

  Catagory_sub_id : Array,
});

var  Follow = mongoose.model("Follows", UsersSchema);
module.exports = Follow;
