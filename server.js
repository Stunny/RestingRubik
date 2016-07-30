var express = require('express');
var app = express();

//--Middleware
var jade = require('jade'); //--->Gestor de plantillas HTML
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var path = require('path');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var port = require('./constants').APP_PORT;
var config = require('./config');

var apiRoutes = express.Router();

//--Enviroment configuration
app.set('views', './view');
app.set('view engine', 'jade');
app.set('secret', config.secret);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

app.use('/api', apiRoutes);

//---Database connection
mongoose.connect(config.dataBase, function(err,res){
	if(err) console.log('Error al conectar a la base de datos:'+err);
	else console.log('Conexion a la base de datos realizada');
});


//---Proves per a depuracio
app.get('/', function(req, res){
	res.render('index', {serveraddress : require('./constants').SERVER_ADDRESS});
});
app.post('/', function(req, res){
	res.status(200).send(req.body);
});

//---Enrutamiento de la aplicacion
require('./routes')(app, apiRoutes);

//---Error handling

if('development' == app.get('env')){
	app.use(errorHandler());
}

//---Server start
app.listen(port);
console.log('Servidor Express escuchando el puerto: '+port);
