var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name : String,
  account : String,
});

module.exports = mongoose.model('Student', StudentSchema);
