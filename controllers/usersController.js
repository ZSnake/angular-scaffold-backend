var user = require('../schemas/user');
var boom = require('boom');
var bcrypt = require('bcrypt');

exports.createUser = {
    // auth: {
    //   mode:'try',
    //   strategy:'session'
    // },
    handler: function(request, reply) {
       bcrypt.hash(request.payload.password, 10, function(err, hash){
          if(err)
            return reply(boom.notAcceptable('Error encrypting password'));
          var newUser = new user({
            username : request.payload.username,
            password : hash,
            scope : request.payload.scope
          });
          newUser.save(function (err) {
            if(err){
              return reply(boom.notAcceptable('Username must be unique: ' + err));
            }else{
              return reply('ok');
            };
          });
        })
    }
  };
