module.exports = function(app){
	var cubeController = require('./controllers/cubeController');
	var algController = require('./controllers/algController');

	//--Metodos de la ruta '/cube'
	app.get('/cube', cubeController.getAllCubes);
	app.get('/cube/:id', cubeController.getCubeByID);
	app.post('/cube', cubeController.addCubo);
	app.put('/cube/:id', cubeController.updateCube);
	app.delete('/cube/:id', cubeController.deleteCube);

	//--Metodos de la ruta '/algorithm'
	app.get('/alg', algController.getAllAlgtms);
	app.get('/alg/:id', algController.getAlgByID);
	app.post('/alg', algController.addAlgtm);
	app.put('/alg/:id', algController.updateAlgtm);
	app.delete('/alg/:id', algController.deleteAlgtm);

}
