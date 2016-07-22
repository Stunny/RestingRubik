var express = require('express');
var app = express();

//--Middleware
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var path = require('path');

//--Enviroment configuration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
//Deprecated ----> app.use(app.router);


//---Database connection
mongoose.connect('mongodb://localhost/cube', function(err,res){
	if(err) console.log('Error al conectar a la base de datos:'+err);
	else console.log('Conexion a la base de datos realizada');
});

//---Proves per a depuracio
app.post('/prueba', function(req, res){
	res.status(200).send(req.body);
});

//---Enrutament de la API
require('./routes')(app);

//---Error handling

if('development' == app.get('env')){
	app.use(errorHandler());
}

//---Server start
app.listen(5000);
console.log('Servidor Express escuchando el puerto 5000.');
