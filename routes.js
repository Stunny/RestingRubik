module.exports = function(app){
	var controller = require('./controller');
	//--Rutas del apartado /cube
	app.get('/cube', controller.getAllCubes);
	app.get('/cube/:id', controller.getCubeByID);
	app.post('/cube', controller.addCubo);
	app.put('/cube/:id', controller.updateCube);
	app.delete('/cube/:id', controller.deleteCube);
}
