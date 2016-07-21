//--GET ALL ALGORITHMS

module.exports.getAllAlgtms = function(req, res){
  var Algtm = require('../models/algorithm');

  Algtm.find(function(err, algs){
    if(!err) res.send(algs);
    else console.log('Error al obtener: '+err);
  });
};

//---GET ALG BY ID
module.exports.getAlgByID = function(req, res){
  var Algtm = require('../models/algorithm');

  Algtm.findById(req.params.id, function(err, alg){
    if(!err) res.send(alg);
    else console.log('Error al obtener: '+err);
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
    kind :       : req.body.kind
  });

  alg.save(function(err){
    if(!err) console.log('Nuevo algoritmo guardado.');
    else console.log('Erro al guardar: '+err);
  });
  res.send(alg);
};

//PUT---UPDATE ALG
module.exports.updateAlgtm = function(req, res){
  var Algtm = require('../models/algorithm');
  console.log('PUT');
  console.log(req.body);

  Algtm.findById(req.params.id, function(err, alg){
    alg.nombre = req.body.nombre;
    alg.moves_number = req.body.moves_number;
    alg.moves = req.body.moves;
    alg.applies_to = req.body.applies_to;
    alg.kind = req.body.kind;

    alg.save(function(err){
      if(!err) console.log('Algoritmo actualizado.');
      else console.log('Error al actualizar: '+err);
    });
  });
};

//DELETE---Eliminar Algoritmo
module.exports.deleteAlgtm = function(req, res){
  var Algtm = require('../models/algorithm');
  Algtm.findById(req.params.id, function(err, alg){
    alg.remove(function(err){
      if(!err) console.log('Algoritmo eliminado');
      else console.log('Error al eliminar: '+err);
    });
  });
}
