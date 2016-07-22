//---Enviara la pagina de formulari addient a la ruta introduida
module.exports.indice = function(req, res){
  var path = require('path');
  try{
    res.sendFile(path.join(__dirname,'../view/index.html'));
  }catch(err){
    res.status(500);
  }
};
module.exports.cubeForm = function(req, res){
  var path = require('path');
  try{
    res.sendFile(path.join(__dirname,'../view/forms/cubeForm.html'));
  }catch(err){
    res.status(500);
  }
};
module.exports.algForm = function(req, res){
  var path = require('path');
  try{
    res.sendFile(path.join(__dirname,'../view/forms/algForm.html'));
  }catch(err){
    res.status(500);
  }
};
module.exports.guideForm = function(req, res){
  var path = require('path');
  try{
    res.sendFile(path.join(__dirname,'../view/forms/guideForm.html'));
  }catch(err){
    res.status(500);
  }
};
