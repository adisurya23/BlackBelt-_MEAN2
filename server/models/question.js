var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    question: String,
    answer: String,
    wrong1: String,
    wrong2: String
});

var Mongoose = mongoose.model('Question', QuestionSchema);