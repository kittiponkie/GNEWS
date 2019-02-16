var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  Article_id: String,
  Article_view : String
});

var Article = mongoose.model("article", UsersSchema);
module.exports = Article;
