var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    Read_id : String,
    Article_id : Array,
    Video_id : Array,
});

var  Read = mongoose.model("Reads", UsersSchema);
module.exports = Read;
