//---Enviara la pagina de formulari addient a la ruta introduida
module.exports.indice = function(req, res){
  res.sendFile('../view/index.html');
};
module.exports.cubeForm = function(req, res){
  res.sendFile(__dirname+'../view/forms/cubeForm.html');
};
module.exports.algForm = function(req, res){
  res.sendFile(__dirname+'../view/forms/algForm.html');
};
module.exports.guideForm = function(){
  res.sendFile(__dirname+'../view/forms/guideForm.html');
};
