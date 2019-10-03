var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var userSchema = mongoose.Schema({

    id : "",
    name: String,
    contactNumber: Number,
    email: String

});


// methods ======================
// generating a hash

// create the model for users and expose it to our app
module.exports = mongoose.model('user', userSchema);
