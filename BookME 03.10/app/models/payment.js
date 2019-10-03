var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


var paymentSchema = mongoose.Schema({

    Children  : { value: NumberDecimal("300.00"), currency: "LKR" },
    Adults  : { value: NumberDecimal("500.00"), currency: "LKR" },
    Owner  : { value: NumberDecimal("500.00"), currency: "LKR" },
    bookme  : { value: NumberDecimal("38.00"), currency: "LKR" },
});



// methods ======================
// generating a hash

// create the model for users and expose it to our app
module.exports = mongoose.model('payment', paymentSchema);
