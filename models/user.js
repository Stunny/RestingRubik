var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var user = new Schema({
  userName  : String,
  password  : String
});

module.exports = mongoose.model('User', user);
