var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var algorithm = new Schema({

  nombre: String,
  moves_number: Number,
  moves: String,
  applies_to: String,
  kind:{
    type: String,
    enum: ['Permutation', 'Orientation', 'Conmutator']
  }

});

module.exports = mongoose.model('Algtm', algorithm);
