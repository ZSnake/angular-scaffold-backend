var student = require('../schemas/student');

exports.getStudents = {
  handler: function(request, reply){
    var students = student.find({});
    reply(students);
  }
}

exports.createStudent = {
  handler: function(request, reply){
    var newStudent = new student({
      name: request.payload.name,
      account: request.payload.account
    });
    newStudent.save();
    console.log('student saved');
    return reply('ok');
  }
}
