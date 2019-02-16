var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  Department_id: String,
  Department_url : String
});

var Department = mongoose.model("Department", UsersSchema);
module.exports = Department;
