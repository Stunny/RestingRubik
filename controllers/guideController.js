//--GET ALL GUIDES
module.exports.getAllGuides = function(){
  var Guide = require('../models/guide');

  Guide.find(function(err, guides){
    if(!err){
      res.send(guides);
      res.status(200);
    }else{
      console.log('Error al obtener: '+err);
      res.status(204);
      res.send('{"status":"204","msg":"no_content"}');
    }
  });
};
