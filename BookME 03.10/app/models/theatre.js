var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var theatreSchema = mongoose.Schema({

    id : Schema.Types.ObjectId,
    name: String,
    address: String,
    key: String,
    screen: [
        {
            name: String,
            key : String,
            odcSeats: [[String]],
            numberOfODCSeats : Number,
            availableODCSeats: Number
        }
    ]
});


// methods ======================
// generating a hash

// create the model for users and expose it to our app
module.exports = mongoose.model('theatre', theatreSchema);
