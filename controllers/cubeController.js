
	// GET---TODOS LOS CUBOS
	module.exports.getAllCubes = function(req, res){
		var Cube = require('../models/cube');
		Cube.find(function(err, cubes){
			if(!err){
				 res.send(cubes);
				 res.status(200);
			}else{
				console.log('Error al obtener: '+err);
				res.status(204);
				res.send('{"status":"204","msg":"no_content"}');
			}
		});
	};

	//GET---POR ID
	module.exports.getCubeByID = function(req,res){
		var Cube = require('../models/cube');
		Cube.findById(req.params.id, function(err, cube){
			if(!err){
				res.send(cube);
				res.status(200);
			}else{
				console.log('Error al obtener: '+err);
				res.send('{"status":"404", "msg": "not_found"}');
				res.status(404);
			}
		});
	};

	//POST---AÑADIR CUBO
	module.exports.addCubo = function(req, res){
		var Cube = require('../models/cube');
		console.log('POST');
		console.log(req.body);

		var cubo = new Cube({
			nombre 	: req.body.nombre,
			brand 	: req.body.brand,
			capas		: req.body.capas,
			kind 		: req.body.kind
		});

		cubo.save(function(err){
			if(!err){
				console.log('Nuevo cubo guardado.');
				res.send(cubo);
				res.status(200);
			}else{
				console.log('Error al guardar: '+err);
				res.send('{"status":"400","msg":"bad_request"}');
				res.status(400);
			}
		});
		//res.send(cubo);
	};

	//PUT---ACTUALIZAR INFO
	module.exports.updateCube = function(req,res){
		var Cube = require('../models/cube');
		console.log('PUT');
		console.log(req.body);

		Cube.findById(req.params.id, function(err, cube){
			cube.nombre 	= req.body.nombre;
			cube.brand 		= req.body.brand;
			cube.capas 		= req.body.capas;
			cube.kind 		= req.body.kind;

			cube.save(function(err){
				if(!err){
					console.log('Cubo actualizado.');
					res.status(200);
					res.send(cube);
				}else{
					console.log('Error al actualizar: '+err);
					res.send('{"status":"400", "msg":"bad_request"}');
					res.status(400);
				}
			});
		});
	};

	//DELETE---ELIMINAR REGISTRO
	module.exports.deleteCube = function(req,res){
		var Cube = require('../models/cube');
		Cube.findById(req.params.id, function(err,cube){
			cube.remove(function(err){
				if(!err){
					console.log('Cubo eliminado.');
					res.status(200);
					res.send('{"status":"200","msg":"OK"}');
				}else{
					console.log('Error: '+err);
					res.status(404);
					res.send('{"status":"404","msg":"not_found"}');
				}
			});
		});
	};
