var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var cube = new Schema({
	nombre  : String,
	brand		: String,
	capas		: String,
	kind		: {
		type	: String,
		enum  : ['Regular', 'Cuboid', 'Modification']
	}

});

module.exports = mongoose.model('Cube', cube);
