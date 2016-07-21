var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var guide = new Schema({
  cube  : String,
  author: String,
  url   : String,
  parts : Number,
  format:{
    type: String,
    enum: ['Video', 'Blog']
  }
});

module.exports = mongoose.model('Guide', guide);
