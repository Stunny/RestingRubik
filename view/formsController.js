//---Enviara la pagina de formulari addient a la ruta introduida
module.exports.indice = function(req, res){
  res.sendFile('../forms/index.html');
};
module.exports.cubeForm = function(req, res){
  res.sendFile('../forms/cubeForm.html');
};
module.exports.algForm = function(req, res){
  res.sendFile('../forms/algForm.html');
};
module.exports.guideForm = function(){
  res.sendFile('../forms/guideForm.html');
};
