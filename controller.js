
	// GET---TODOS LOS CUBOS
	exports.getAllCubes = function(req, res){	
		var Cube = require('./cube');
		Cube.find(function(err, cubes){
			if(!err) res.send(cubes);
			else console.log('Error: '+err);
		});
	};

	//GET---POR ID
	exports.getCubeByID = function(req,res){
		var Cube = require('./cube');
		Cube.findByID(req.params.id, function(err, cube){
			if(!err) res.send(cube);
			else console.log('Error: '+err);
		});
	};
	
	//POST---AÑADIR CUBO
	exports.addCubo = function(req,res){
		var Cube = require('./cube');
		console.log('POST');
		console.log(req.body);

		var cubo = new Cube({
			name : req.body.name,
			brand : req.body.brand,
			layers : req.body.layers,
			kind : req.body.kind
		});

		cubo.save(function(err){
			if(!err) console.log('Cubo guardado.');
			else console.log('Error: '+err);
		});
	};

	//PUT---ACTUALIZAR INFO
	exports.updateCube = function(req,res){
		var Cube = require('./cube');
		console.log('PUT');
		console.log(req.body);
		
		Cube.findByID(req.params.id, function(err, cube){
			cube.name = req.body.name;
			cube.brand = req.body.brand;
			cube.layers = req.body.layers;
			cube.kind = req.body.kind;
		});

		cube.save(function(err){
			if(!err) console.log('Cubo actualizado.');
			else console.log('Error: '+err);
		});

	};
	
	//DELETE---ELIMINAR REGISTRO
	exports.deleteCube = function(req,res){
		var Cube = require('./cube');
		Cube.findByID(req.params.id, function(err,cube){
			cube.remove(function(err){
				if(!err) console.log('Cubo eliminado.');
				else console.log('Error: '+err);
			});
		});
	};
