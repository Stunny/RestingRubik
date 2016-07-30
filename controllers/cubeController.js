
	// GET---TODOS LOS CUBOS
	module.exports.getAllCubes = function(req, res){
		var Cube = require('../models/cube');
		try{
			Cube.find(function(err, cubes){
				if(!err){
					 res.setHeader('content-type', 'application/json');
					 res.send(JSON.stringify(cubes));
					 res.status(200);
				}else{
					console.log('Error al obtener: '+err);
					res.status(204);
					res.setHeader('content-type', 'application/json');
					res.send('{"status":"204","msg":"no_content"}');
				}
			});
		}catch(err){
			res.status(500);
			res.setHeader('content-type', 'application/json');
			res.send('{"status":"500","msg":"internal_server_error"}');
		}
	};

	//GET---POR ID
	module.exports.getCubeByID = function(req,res){
		var Cube = require('../models/cube');
		try{
			Cube.findById(req.params.id, function(err, cube){
				if(!err){
					res.setHeader('content-type', 'application/json');
					res.send(JSON.stringify(cube));
					res.status(200);
				}else{
					console.log('Error al obtener: '+err);
					res.setHeader('content-type', 'application/json');
					res.send('{"status":"404", "msg": "not_found"}');
					res.status(404);
				}
			});
		}catch(err){
			res.status(500);
			res.setHeader('content-type', 'application/json');
			res.send('{"status":"500","msg":"internal_server_error"}');
		}
	};

	//POST---AÑADIR CUBO
	module.exports.addCubo = function(req, res){
		var Cube = require('../models/cube');
		try{
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
					res.setHeader('content-type', 'application/json');
					res.send(JSON.stringify(cubo));
					res.status(200);
				}else{
					console.log('Error al guardar: '+err);
					res.setHeader('content-type', 'application/json');
					res.send('{"status":"400","msg":"bad_request"}');
					res.status(400);
				}
			});
		}catch(err){
			res.status(500);
			res.setHeader('content-type', 'application/json');
			res.send('{"status":"500","msg":"internal_server_error"}');
		}
	};

	//PUT---ACTUALIZAR INFO
	module.exports.updateCube = function(req,res){
		var Cube = require('../models/cube');
		try{
			console.log(req.body);

			Cube.findById(req.params.id, function(err, cube){
				cube.nombre 	= req.body.nombre;
				cube.brand 		= req.body.brand;
				cube.capas 		= req.body.capas;
				cube.kind 		= req.body.kind;

				cube.save(function(err){
					if(!err){
						console.log('Cubo actualizado.');
						res.setHeader('content-type', 'application/json');
						res.status(200);
						res.send(JSON.stringify(cube));
					}else{
						console.log('Error al actualizar: '+err);
						res.setHeader('content-type', 'application/json');
						res.send('{"status":"400", "msg":"bad_request"}');
						res.status(400);
					}
				});
			});
		}catch(err){
			res.status(404);
			res.setHeader('content-type', 'application/json');
			res.send('{"status":"404","msg":"not_found"}');
		}
	};

	//DELETE---ELIMINAR REGISTRO
	module.exports.deleteCube = function(req,res){
		var Cube = require('../models/cube');
		var cId = req.params.id;
		try{
			Cube.findOneAndRemove({_id : cId}, function(err,cube){
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
		}catch(err){
			res.status(404);
			res.send('{"status":"404","msg":"not_found"}');
		}
	};
