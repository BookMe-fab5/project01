var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var showSchema = mongoose.Schema({

    id: Schema.Types.ObjectId,
    key: String,
    showTime: Date,
    screen: {
        name: String,
        key: String,
        odcSeats: [[String]],
        numberOfODCSeats: Number,
        availableODCSeats: Number
    },
    movie : {
        key : String,
        name: String,
        cast : [String],
        image: String,
        trailer: String,
        language : String,
        genre : [String]
    }

});


// methods ======================
// generating a hash

// create the model for users and expose it to our app
module.exports = mongoose.model('show', showSchema);
