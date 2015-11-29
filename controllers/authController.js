var joi = require('Joi');
var boom = require('Boom');
var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");

exports.login = {
    auth: false,
    validate: {
      payload: {
        username: joi.string().required(),
        password: joi.string().min(2).max(200).required()
      }
    },
    handler: function(request, reply) {
        var password = String(SHA3(request.payload.password));
        user.find({username: request.payload.username, password: password}, function(err, user){
            if(err)
              return reply(boom.unauthorized('Bad email or password'));
            request.auth.session.set(user[0]);
            return reply({username: user[0].username, scope: user[0].scope});
        });
  }
};
exports.logout = {
    auth: {
      mode:'required',
      strategy:'session'
    },
    handler: function(request, reply) {
      request.auth.session.clear();
      return reply('Logout Successful!');
    }
  };
