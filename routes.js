var homeController = require('./controllers/homeController');
var studentsController = require('./controllers/studentsController');

exports.endpoints = [{method: 'GET', path: '/{param*}', config: homeController.home},
					 {method: 'GET', path: '/v1/students', config: studentsController.getStudents},
           {method: 'POST', path: '/v1/student', config: studentsController.createStudent}];
