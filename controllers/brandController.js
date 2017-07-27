//GET --- Todas las marcas

module.exports.getAllBrand = function (req, res){
  var Brand = require ('../model/brand');
  try {
    Brand.find(function(err, brands){
      if(!err){
         res.setHeader('content-type', 'application/json');
         res.send(JSON.stringify(brands));
         res.status(200);
      }else{
        console.log('Error al obtener: '+err);
        res.status(204);
        res.setHeader('content-type', 'application/json');
        res.send('{"status":"204","msg":"no_content"}');
      }
    });
  } catch (err){
    res.status(500);
    res.setHeader('content-type', 'application/json');
    res.send('{"status":"500","msg":"internal_server_error"}');
  }
}

//GET --- MARCA POR ID

module.exports.getBrandID = function(req,res){
  var Brand = require('../models/brand');
  try{
    Brand.findById(req.params.id, function(err, brand){
      if(!err){
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify(brands));
        res.status(200);
      }else{
        console.log('Error al obtener: '+err);
        res.setHeader('content-type', 'application/json');
        res.send('{"status":"404", "msg": "not_found"}');
        res.status(404);
      }
    });
  }catch(err){
    res.status(500);
    res.setHeader('content-type', 'application/json');
    res.send('{"status":"500","msg":"internal_server_error"}');
  }
};

//POST --- AÑADIR MARCA
module.exports.addBrand = function(req, res){
  var Brand = require('../models/brand');
  try{
    console.log(req.body);

    var brand = new Brand({
      nombre 	: req.body.nombre,
      pais 	  : req.body.pais,
      web		  : req.body.web
    });

    brand.save(function(err){
      if(!err){
        console.log('Nueva marca guardado.');
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify(brand));
        res.status(200);
      }else{
        console.log('Error al guardar: '+err);
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

//PUT---ACTUALIZAR INFO DE LA MARCA
module.exports.updateBrand = function(req,res){
  var Brand = require('../models/brand');
  try{
    console.log(req.body);

    Brand.findById(req.params.id, function(err, brand){
      brand.nombre 	= req.body.nombre;
      brand.pais 		= req.body.pais;
      brand.web 		= req.body.web;

      brand.save(function(err){
        if(!err){
          console.log('Marca actualizada');
          res.setHeader('content-type', 'application/json');
          res.status(200);
          res.send(JSON.stringify(brand));
        }else{
          console.log('Error al actualizar: '+err);
          res.setHeader('content-type', 'application/json');
          res.send('{"status":"400", "msg":"bad_request"}');
          res.status(400);
        }
      });
    });
  }catch(err){
    res.status(404);
    res.setHeader('content-type', 'application/json');
    res.send('{"status":"404","msg":"not_found"}');
  }
};

//DELETE---ELIMINAR MARCA DEL REGISTRO
module.exports.deleteBrand = function(req,res){
  var Brand = require('../models/brand');
  var bId = req.params.id;
  try{
    Brand.findOneAndRemove({_id : bId}, function(err,cube){
        if(!err){
          console.log('Marca borrada.');
          res.status(200);
          res.send('{"status":"200","msg":"OK"}');
        }else{
          console.log('Error: '+err);
          res.status(404);
          res.send('{"status":"404","msg":"not_found"}');
        }
    });
  }catch(err){
    res.status(404);
    res.send('{"status":"404","msg":"not_found"}');
  }
};
