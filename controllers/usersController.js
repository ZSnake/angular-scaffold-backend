var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.createUser = {
    auth: {
      mode:'try',
      strategy:'session'
    },
    handler: function(request, reply) {
      console.log(request.payload);
       var newUser = new user({
         username : request.payload.username,
         password : SHA3(request.payload.password),
         scope : request.payload.scope
       });
       newUser.save(function (err) {
         console.log(err);
         if(err){
          return reply(boom.notAcceptable('Username must be unique: ' + err));
         }else{
           return reply('ok');
         };
      });
    }
  };
