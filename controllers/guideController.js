//--GET ALL GUIDES
module.exports.getAllGuides = function(){
  var Guide = require('../models/guide');
  try{
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
  }catch(err){
    res.status(500);
    res.send('{"status":"500","msg":"internal_server_error"}');
  }
};

//---GET GUIDE BY ID
module.exports.getGuideById = function(req, res){
  var Guide = require('../models/guide');
  try{
    Guide.findById(req.params.id, function(err, guide){
      if(!err){
        res.send(guide);
        res.status(200);
      }
      else{
        res.status(404);
        res.send('{"status":"404","msg":"not_found"}');
      }
    });
  }catch(err){
    res.status(500);
    res.send('{"status":"500","msg":"internal_server_error"}');
  }
};

//---POST
module.exports.addGuide = function(req, res){
  var Guide = require('../models/guide');
  console.log('POST');
  try{
    console.log(req.body);

    var guide = new Guide({
      cube    :req.body.cube,
      author  :req.body.author,
      url     :req.body.url,
      parts   :req.body.parts,
      format  :req.body.format
    });
    guide.save(function(err){
      if(!err){
        console.log('Nueva guia guardada.');
        res.status(200).send(guide);
      }else{
        console.log('Error al guardar: '+err);
        res.status(400).send('{"status":"400", "msg":"bad_request"}');
      }
    });
  }catch(err){
    res.status(500);
    res.send('{"status":"500","msg":"internal_server_error"}');
  }
};

//---PUT
module.exports.updateGuide = function(req,res){
  var Guide = require('../models/guide');
  console.log('PUT');
  try{
    console.log(req.body);

    Guide.findById(req.params.id, function(err,guide){
      guide.cube      = req.body.cube;
      guide.author    = req.body.author;
      guide.url       = req.body.url;
      guide.parts     = req.body.parts;
      guide.format    = req.body.format;

      guide.save(function(err){
        if(!err){
          console.log('Guia actualizada.');
          req.status(200).send(guide);
        }else{
          console.log('Error al actualizar: '+err);
          res.status(400).send('{"status":"400","msg":"bad_request"}');
        }
      });
    });
  }catch(err){
    res.status(404).send('{"status":"404","msg":"not_found"}');
  }
};

//---DELETE
module.exports.deleteGuide = function(req,res){
  var Guide = require('../models/guide');
  try{
    Guide.findById(req.params.id, function(err, guide){
      guide.remove(function(err){
        if(!err){
          console.log('Guia eliminada.');
          res.status(200).send('{"status":"200","msg":"OK"}');
        }else{
          res.status(400).send('{"status":"400","msg":"bad_request"}');
        }
      });
    });
  }catch(err){
    res.status(404).send('{"status":"404","msg":"not_found"}');
  }
};
