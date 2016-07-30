module.exports = function(req, res){
  var User = require('../models/user');
  var conf = require('../config');
  try{
    console.log(req.body);

    var us = new User({
      userName : req.body.name,
      password : conf.hashCode(req.body.password)
    });

    us.save(function(err){
      if(!err){
        console.log('Usuario registrado');
        res.setHeader('content-type', 'application/json');
        res.status(200);
        res.send(JSON.stringify(us));
      }else{
        console.log('Error al registrar: '+err);
        res.setHeader('content-type', 'application/json');
        res.status(400);
        res.send(JSON.stringify({
          status : 400,
          msg : 'bad_request'
        }));
      }
    });

  }catch(err){
    res.status(500);
    res.setHeader('content-type', 'application/json');
    res.send('{"status":"500","msg":"internal_server_error"}');
  }
}
