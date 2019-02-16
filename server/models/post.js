var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  User_id : String,
  User_name : String,
  User_email : String,
  User_password : String,
  Login_type : String,
  Follow_id : String,
  Block_id : String,
  Read_id : String,
  Later_id : String,
  token : String,
  tokencheck : String
});

var Users = mongoose.model("Users", UsersSchema);
module.exports = Users;
