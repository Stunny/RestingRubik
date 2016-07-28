module.exports = function(req, res, token, next, app){
  var jwt = require('jsonwebtoken'),
      conf = require('../config');

  if(token){
    // Verificamos el JWT enviado con la clave del sistema
    jwt.verify(token, conf.secret, function(err, decoded){
      if(err){
        return res.send(JSON.stringify({msg : 'Token unauthenticated', success : false}));
      }
      else{
        req.decoded = decoded;
        next();
      }
    });
  }
  else{
    return res.status(403).send(JSON.stringify({
      msg : 'Unauthorized',
      success: 'false'
    }));
  }
}
