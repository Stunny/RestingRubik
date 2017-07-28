//--GET ALL ALGORITHMS
module.exports.getAllAlgtms = function(req, res){
  var Algtm = require('../models/algorithm');
  try{
    Algtm.find(function(err, algs){
      if(!err){
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify(algs));
        res.status(200);
      }else{
        console.log('Error al obtener: '+err);
        res.setHeader('content-type', 'application/json');
        res.status(204);
        res.send('{"status":"204","msg":"no_content"}');
      }
    });
  }catch(err){
    res.status(500);
    res.setHeader('content-type', 'application/json');
    res.send('{"status":"500","msg":"internal_server_error"}');
  }
};

//---GET ALG BY ID
module.exports.getAlgByID = function(req, res){
  var Algtm = require('../models/algorithm');
  try{
    Algtm.findById(req.params.id, function(err, alg){
      if(!err){
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify(alg));
        res.status(200);
      }else{
        console.log('Error al obtener: '+err);
        res.setHeader('content-type', 'application/json');
        res.status(404);
        res.send('{"status":"404","msg":"not_found"}');
      }
    });
  }catch(err){
    res.status(500);
    res.setHeader('content-type', 'application/json');
    res.send('{"status":"500","msg":"internal_server_error"}');
  }
};

//POST---AÑADIR ALG
module.exports.addAlgtm = function(req, res){
  var Algtm = require('../models/algorithm');
  console.log(req.body);
  try{
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
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify(alg));
        res.status(200);
      }else{
        console.log('Erro al guardar: '+err);
        res.setHeader('content-type', 'application/json');
        res.send('{"status":"400","msg":"bad_request"}');
        res.status(400);
      }
    });
  }catch(err){
    res.status(500);
    res.setHeader('content-type', 'application/json');
    res.send('{"status":"500","msg":"internal_server_error"}');
  }
};

//PUT---UPDATE ALG
module.exports.updateAlgtm = function(req, res){
  var Algtm = require('../models/algorithm');
  try{
    console.log(req.body);
    Algtm.findById(req.params.id, function(err, alg){

      if(err){
        console.log('Error al actualizar: '+err);
        res.setHeader('content-type', 'application/json');
        res.send('{"status":"404", "msg":"alg_not_found"}');
        res.status(404);
        return;
      }

      alg.nombre       = req.body.nombre;
      alg.moves_number = req.body.moves_number;
      alg.moves        = req.body.moves;
      alg.applies_to   = req.body.applies_to;
      alg.kind         = req.body.kind;

      alg.save(function(err){
        if(!err){
          console.log('Algoritmo actualizado.');
          res.setHeader('content-type', 'application/json');
          res.status(200);
          res.send(JSON.stringify(alg));
        }else{
          console.log('Error al actualizar: '+err);
          res.status(400);
          res.setHeader('content-type', 'application/json');
          res.send('{"status":"400","msg":"bad_request"}');
        }
      });
    });
  }catch(err){
    res.status(404);
    res.setHeader('content-type', 'application/json');
    res.send('{"status":"404","msg","not_found"}');
  }
};

//DELETE---Eliminar Algoritmo
module.exports.deleteAlgtm = function(req, res){
  var Algtm = require('../models/algorithm');
  var algId = req.params.id;
  try{
    Algtm.findOneAndRemove({_id : algId}, function(err, alg){
        if(!err){
          console.log('Algoritmo eliminado');
          res.status(200);
          res.setHeader('content-type', 'application/json');
          res.send('{"status":"200","msg":"OK"}');
        }else{
          console.log('Error al eliminar: '+err);
          res.status(404);
          res.setHeader('content-type', 'application/json');
          res.send('{"status":"404","msg":"not_found"}');
        }
    });
  }catch(err){
    res.status(500);
    res.setHeader('content-type', 'application/json');
    res.send('{"status":"500","msg":"internal_server_error"}');
  }
}
