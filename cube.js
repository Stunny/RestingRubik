var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var cube = new Schema({
	name : String,
	brand: String,
	layers: String,
	kind: {
		type: String,
		enum : ['Regular', 'Cuboid', 'Modification']
	}

});

module.exports = mongoose.model('Cube', cube);
