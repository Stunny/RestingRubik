//--GET ALL ALGORITHMS

module.exports.getAllAlgtms = function(req, res){
  var Algtm = require('../models/algorithm');

  Algtm.find(function(err, algs){
    if(!err){
      res.send(algs);
      res.status(200);
    }else{
      console.log('Error al obtener: '+err);
      res.status(204);
      res.send('{"status":"204","msg":"no_content"}');
    }
  });
};

//---GET ALG BY ID
module.exports.getAlgByID = function(req, res){
  var Algtm = require('../models/algorithm');

  Algtm.findById(req.params.id, function(err, alg){
    if(!err){
      res.send(alg);
      res.status(200);
    }else{
      console.log('Error al obtener: '+err);
      res.status(404);
      res.send('{"status":"404","msg":"not_found"}');
    }
  });
};

//POST---AÑADIR ALG
module.exports.addAlgtm = function(req, res){
  var Algtm = require('../models/algorithm');
  console.log('POST');
  console.log(req.body);

  var alg = new Algtm({
    nombre       : req.body.nombre,
    moves_number : req.body.moves_number,
    moves        : req.body.moves,
    applies_to   : req.body.applies_to,
    kind         : req.body.kind
  });

  alg.save(function(err){
    if(!err){
      console.log('Nuevo algoritmo guardado.');
      res.send(alg);
      res.status(200);
    }else{
      console.log('Erro al guardar: '+err);
      res.send('{"status":"400","msg":"bad_request"}');
      res.status(400);
    }
  });
  res.send(alg);
};

//PUT---UPDATE ALG
module.exports.updateAlgtm = function(req, res){
  var Algtm = require('../models/algorithm');
  console.log('PUT');
  console.log(req.body);

  Algtm.findById(req.params.id, function(err, alg){
    alg.nombre       = req.body.nombre;
    alg.moves_number = req.body.moves_number;
    alg.moves        = req.body.moves;
    alg.applies_to   = req.body.applies_to;
    alg.kind         = req.body.kind;

    alg.save(function(err){
      if(!err){
        console.log('Algoritmo actualizado.');
        res.status(200);
        res.send(alg);
      }else{
        console.log('Error al actualizar: '+err);
        res.send('{"status":"400","msg":"bad_request"}');
      }
    });
  });
};

//DELETE---Eliminar Algoritmo
module.exports.deleteAlgtm = function(req, res){
  var Algtm = require('../models/algorithm');
  Algtm.findById(req.params.id, function(err, alg){
    alg.remove(function(err){
      if(!err){
        console.log('Algoritmo eliminado');
        res.status(200);
        res.send('{"status":"200","msg":"OK"}');
      }else{
        console.log('Error al eliminar: '+err);
        res.status(404);
        res.send('{"status":"404","msg":"not_found"}');
      }
    });
  });
}
