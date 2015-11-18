var hapi = require('hapi');
var inert = require('inert');

var server = new hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: +process.env.PORT | 8000,
});


server.register(inert, function(err){

	server.route([{
    method: 'GET',
    path: '/{param*}',
    config: {
      handler:{
        directory: {
          path: ['../client/app', '../client/bower_components']
        }
      }
    }
  }, {
    method: 'GET',
    path: '/students',
    config: {
      handler: function(request, reply){
        var students = [{account: '11341097', name: 'Katherine Gabriel Lozano'},
        {account: '11241278', name: 'Dennis Cheong Cheong'},
        {account: '11211072', name: 'Eduardo Makoto Katsumata'},
        {account: '11341020', name: 'Alvaro Alexandre Reyes'},
        {account: '11341019', name: 'Danny Cheong Cheong'},
        {account: '11341068', name: 'Gisselle Lagos'},
        {account: '11341055', name: 'Dario Oqueli Villalta'},
        {account: '11411033', name: 'Elena Gabriela Caballero'},
        {account: '31211290', name: 'David Alejandro Baquedano'},
        {account: '11341047', name: 'David Alejandro Castro Arias'},
        {account: '11221019', name: 'Jossy Xavier Melgar'},
        {account: '11411196', name: 'Dario Alexander Cardona'},
        {account: '10821108', name: 'Karen Melissa Rodriguez'}];
        reply(students);
      }
    }
  },{
    method: 'POST',
    path: '/students',
    config: {
      handler: function(request, reply){
        console.log("POST a /students realizado, con la siguiente data: Nombre: \n" + request.payload.name + "\nAccount: " + request.payload.account )
        reply('ok');
      }
    }
  }]);



	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
