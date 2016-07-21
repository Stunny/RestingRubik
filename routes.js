module.exports = function(app){
	var cubeController = require('./controllers/cubeController');
	//--Metodos de la ruta '/cube'
	app.get('/cube', cubeController.getAllCubes);
	app.get('/cube/:id', cubeController.getCubeByID);
	app.post('/cube', cubeController.addCubo);
	app.put('/cube/:id', cubeController.updateCube);
	app.delete('/cube/:id', cubeController.deleteCube);

	//--Metodos de la ruta '/algorithm'
}
