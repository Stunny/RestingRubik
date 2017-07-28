var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var brand = new Schema ({

  nombre : String,
  pais   : String,
  web    : String

});


module.exports = mongoose.model('Brand', brand);
