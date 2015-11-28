var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");

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
       newUser.save();
       reply('ok');
    }
  };
