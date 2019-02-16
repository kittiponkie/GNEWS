var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  Block_id : String,

  Catagory_sub_id : Array,
});

var  Block = mongoose.model("Blocks", UsersSchema);
module.exports = Block;
