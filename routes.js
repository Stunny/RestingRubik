module.exports = function(app){

	//---FORMULARIS---//
	var formsController = require('./controllers/formsController');

		app.get('/', formsController.indice);
		app.get('/moarcubes', formsController.cubeForm);
		app.get('/moarguides', formsController.guideForm);
		app.get('/moaralgs', formsController.algForm);

		app.get('/putForm', formsController.putForm);
		app.get('/deleteForm', formsController.deleteForm);

	//---API---//
	var cubeController = require('./controllers/cubeController');
	var algController = require('./controllers/algController');
	var guideController = require('./controllers/guideController');

		app.get('/api/',function(req, res){
			res.status(200);
			res.send(JSON.stringify({msg : 'Welcome to RestingRubik API'}));
		});

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
