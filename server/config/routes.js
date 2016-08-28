var questions = require('../controllers/questions.js');
var users = require('../controllers/users.js');

module.exports = function(app){

    app.get('/questions', function(req, res){
        questions.show(req,res);
    });

    app.post('/add_question', function(req, res){
        questions.add(req,res);
    });

    app.get('/users', function(req, res){
        users.show(req,res);
    });

    app.post('/add_user', function(req, res){
        users.add(req,res);
    });

}