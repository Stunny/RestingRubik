module.exports = function(req, res){
  var User = require('../models/user');
  var conf = require('../config');
  var jwt = require('jsonwebtoken');

  User.findOne({
    userName : req.body.userName
  }, function(err, user){
    if(err) throw err;

    if(!user){
      res.status(401);
      res.send(JSON.stringify({
        msg : 'Unauthorized',
        status : 401
      }));
    } else if(user){
      if(user.password != conf.hashCode(req.body.password)){
        res.status(401);
        res.send(JSON.stringify({
          msg : 'Unauthorized',
          status : 401
        }));
      }else{
        // Autenticacion satisfactoria. Devuelvo el token
        var token = jwt.sign(user, conf.secret,
          expireInMinutes : 1440 //Tiempo de vida del token: 24h
        );

        res.status(200);
        res.send(JSON.stringify({
          msg: 'Authenticated',
          status: 200,
          token: token
        }));

      }
    }
  });
}
