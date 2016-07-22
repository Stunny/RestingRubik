//---Enviara la pagina de formulari addient a la ruta introduida
module.exports.indice = function(req, res){
  var path = require('path');
  res.sendFile(path.join(__dirname,'../view/index.html'));
};
module.exports.cubeForm = function(req, res){
  var path = require('path');
  res.sendFile(path.join(__dirname,'../view/forms/cubeForm.html'));
};
module.exports.algForm = function(req, res){
  var path = require('path');
  res.sendFile(path.join(__dirname,'../view/forms/algForm.html'));
};
module.exports.guideForm = function(){
  var path = require('path');
  res.sendFile(path.join(__dirname,'../view/forms/guideForm.html'));
};
