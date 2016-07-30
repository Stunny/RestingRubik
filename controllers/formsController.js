module.exports.registerForm = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('registerForm', {serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
module.exports.indice = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('index', {serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
module.exports.cubeForm = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('cubeForm',{serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
module.exports.algForm = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('algForm',{serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
module.exports.guideForm = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('guideForm',{serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
module.exports.putForm = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('putForm', {serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
module.exports.deleteForm = function(req, res){
  var server = require('../constants').SERVER_ADDRESS;
  try{
    res.render('deleteForm', {serveraddress : server});
  }catch(err){
    res.status(500);
  }
};
