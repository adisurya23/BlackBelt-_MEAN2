var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String
});

var Mongoose = mongoose.model('User', UserSchema);