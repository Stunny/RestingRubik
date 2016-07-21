
	// GET---TODOS LOS CUBOS
	module.exports.getAllCubes = function(req, res){
		var Cube = require('../models/cube');
		Cube.find(function(err, cubes){
			if(!err) res.send(cubes);
			else console.log('Error: '+err);
		});
	};

	//GET---POR ID
	module.exports.getCubeByID = function(req,res){
		var Cube = require('../models/cube');
		Cube.findById(req.params.id, function(err, cube){
			if(!err) res.send(cube);
			else console.log('Error: '+err);
		});
	};

	//POST---AÑADIR CUBO
	module.exports.addCubo = function(req, res){
		var Cube = require('../models/cube');
		console.log('POST');
		console.log(req.body);

		var cubo = new Cube({
			nombre : req.body.nombre,
			brand : req.body.brand,
			capas : req.body.capas,
			kind : req.body.kind
		});

		cubo.save(function(err){
			if(!err) console.log('Cubo guardado.');
			else console.log('Error: '+err);
		});
		res.send(cubo);
	};

	//PUT---ACTUALIZAR INFO
	module.exports.updateCube = function(req,res){
		var Cube = require('../models/cube');
		console.log('PUT');
		console.log(req.body);

		Cube.findById(req.params.id, function(err, cube){
			cube.nombre = req.body.nombre;
			cube.brand = req.body.brand;
			cube.capas = req.body.capas;
			cube.kind = req.body.kind;

			cube.save(function(err){
				if(!err) console.log('Cubo actualizado.');
				else console.log('Error: '+err);
			});
		});
	};

	//DELETE---ELIMINAR REGISTRO
	module.exports.deleteCube = function(req,res){
		var Cube = require('../models/cube');
		Cube.findById(req.params.id, function(err,cube){
			cube.remove(function(err){
				if(!err) console.log('Cubo eliminado.');
				else console.log('Error: '+err);
			});
		});
	};
