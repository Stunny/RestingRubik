var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.get(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
} );

mongoose.connect('mongodb://localhost/cube', function(err,res){
	if(err) console.log('Error al conectar a la base de datos:'+err);
	else console.log('Conexion a la base de datos realizada');
});


app.get('/', function(req,res){
	res.send('Hola Mundo!');
});

require('./routes')(app);

app.listen(5000);
console.log('Servidor Express escuchando el puerto 5000.');
