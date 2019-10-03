var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var bookingSchema = mongoose.Schema({

    id : "",
    user : {
        id : "",
        name : String,
        email : String
    },
    bookingReference : String,
    time : Date,
    numberOfFull : Number,
    numberOfHalf : Number,
    movie : {
        name: String,
        description: String,
        cast : [String],
        image: String,
        trailer: String,
        releaseDate : Date,
        language : String,
        genre : [String]
    }

});


// methods ======================
// generating a hash

// create the model for users and expose it to our app
module.exports = mongoose.model('booking', bookingSchema);
