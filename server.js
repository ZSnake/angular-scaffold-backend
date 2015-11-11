var hapi = require('hapi');
var inert = require('inert');

var server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000,
});


server.register(inert, function(err){

	server.route({
    handler:{
      directory: {
        path: ['../client/app', '../client/bower_components']
      }
    }
  });


	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
