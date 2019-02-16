var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  User_id : String,
  Article_id : Array,
  CountNoti : String
});

var  Notification = mongoose.model("Notifications", UsersSchema);
module.exports = Notification;
