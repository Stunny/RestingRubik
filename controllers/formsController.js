//---Enviara la pagina de formulari addient a la ruta introduida
module.exports.indice = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('index', {serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
module.exports.cubeForm = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('cubeForm',{serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
module.exports.algForm = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('algForm',{serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
module.exports.guideForm = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('guideForm',{serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
