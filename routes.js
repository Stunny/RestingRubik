module.exports = function(app, apiRoutes){

	//---FORMULARIS---//
	var formsController = require('./controllers/formsController');
	var setup = require('./controllers/setup');
		app.get('/index', formsController.indice);
		app.get('/moarcubes', formsController.cubeForm);
		app.get('/moarguides', formsController.guideForm);
		app.get('/moaralgs', formsController.algForm);
		app.get('/moarbrands', formsController.brandForm);
		app.get('/putForm', formsController.putForm);
		app.get('/deleteForm', formsController.deleteForm);

		app.get('/register', formsController.registerForm);
		app.post('/register', require('./controllers/registerController'));
		app.get('/login', formsController.loginForm);
		app.get('/setup', setup);

	//---API---//
	var cubeController = require('./controllers/cubeController');
	var algController = require('./controllers/algController');
	var guideController = require('./controllers/guideController');
	var brandController = require('./controllers/brandController');

	//---*SEGURIDAD API*---//

		apiRoutes.use(function(req, res, next){
			// S'intenta aconseguir el JWT de les tres formes possibles
			var token = req.body.token || req.query.token || req.headers['x-access-token'];
			require('./controllers/tokenVerifier')(req, res, token, next, app);
		});

	//---*RUTAS*---//

		apiRoutes.get('/',function(req, res){
			res.status(200);
			res.send(JSON.stringify({msg : 'Welcome to RestingRubik API'}));
		});

		app.post('/apiauth', require('./controllers/authController')); //Si lo pongo por las rutas de la api no deja utenticar

		//--Metodos de la ruta '/cube'
		apiRoutes.get('/cube', cubeController.getAllCubes);
		apiRoutes.get('/cube/:id', cubeController.getCubeByID);
		apiRoutes.post('/cube', cubeController.addCubo);
		apiRoutes.put('/cube/:id', cubeController.updateCube);
		apiRoutes.delete('/cube/:id', cubeController.deleteCube);

		//--Metodos de la ruta '/algorithm'
		apiRoutes.get('/alg', algController.getAllAlgtms);
		apiRoutes.get('/alg/:id', algController.getAlgByID);
		apiRoutes.post('/alg', algController.addAlgtm);
		apiRoutes.put('/alg/:id', algController.updateAlgtm);
		apiRoutes.delete('/alg/:id', algController.deleteAlgtm);

		//--Metodos de la ruta '/guide'
		apiRoutes.get('/guide', guideController.getAllGuides);
		apiRoutes.get('/guide/:id', guideController.getGuideById);
		apiRoutes.post('/guide', guideController.addGuide);
		apiRoutes.put('/guide/:id', guideController.updateGuide);
		apiRoutes.delete('/guide/:id', guideController.deleteGuide);

		//--Metodos de la ruta '/brand'
		apiRoutes.get('/brand', brandController.getAllBrand);
		apiRoutes.get('/brand/:id', brandController.getBrandID);
		apiRoutes.post('/brand', brandController.addBrand);
		apiRoutes.put('/brand/:id', brandController.updateBrand);
		apiRoutes.delete('/brand/:id', brandController.deleteBrand);

}
