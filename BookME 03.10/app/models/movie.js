var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var movieSchema = mongoose.Schema({

    id : Schema.Types.ObjectId,
    key : String,
    name: String,
    description: String,
    cast : [String],
    image: String,
    trailer: String,
    releaseDate : Date,
    language : String,
    genre : [String]

});


// methods ======================
// generating a hash

// create the model for users and expose it to our app
module.exports = mongoose.model('movie', movieSchema);
