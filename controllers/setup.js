module.exports = function(req, res){
  var User = require('../models/user'),
      conf = require('../config'),			//Usuario minimo de la aplicacion
      cp = new User({
        name : 'cubopez',
        password : conf.hashCode('hoo-banginOG')
      });
      cp.save(function(err){
        if(err) throw err;
        console.log('Cubopez registrado');
        res.send(JSON.stringify({success : true}));
      });
}
