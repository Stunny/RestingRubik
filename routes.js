module.exports = function(app){
	var cubeController = require('./controllers/cubeController');
	var algController = require('./controllers/algController');
	var guideController = require('./contrllers/guideController');

	//--Metodos de la ruta '/cube'
	app.get('/api/cube', cubeController.getAllCubes);
	app.get('/api/cube/:id', cubeController.getCubeByID);
	app.post('/api/cube', cubeController.addCubo);
	app.put('/api/cube/:id', cubeController.updateCube);
	app.delete('/api/cube/:id', cubeController.deleteCube);

	//--Metodos de la ruta '/algorithm'
	app.get('/api/alg', algController.getAllAlgtms);
	app.get('/api/alg/:id', algController.getAlgByID);
	app.post('/api/alg', algController.addAlgtm);
	app.put('/api/alg/:id', algController.updateAlgtm);
	app.delete('/api/alg/:id', algController.deleteAlgtm);

	//--Metodos de la ruta '/guide'
	app.get('/api/guide', guideController.getAllGuides);
	app.get('/api/guide/:id', guideController.getGuideById);
	app.post('/api/guide', guideController.addGuide);
	app.put('/api/guide/:id', guideController.updateGuide);
	app.delete('/api/guide/:id', guideController.deleteGuide);

}
