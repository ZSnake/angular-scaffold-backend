var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username : String,
  password : String,
  scope : [String]
});

module.exports = mongoose.model('User', UserSchema);
