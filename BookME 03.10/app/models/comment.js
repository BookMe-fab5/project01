var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({

  name: {
    type: String,
    require:true
  },
  email: {
    type: String,
  },
  subject: {
    type: String,
  },
  message:{
    type:String
  }

});

/*
joinSchema.path('email').validate(function (email) {
   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   return emailRegex.test(email.text); // Assuming email has a text attribute
}, 'The e-mail field cannot be empty.')

joinSchema.path('phoneNumber').validate(function (value) {
  var phoneNumberRegex = /^\d{9}$/;
  return phoneNumber.test(phoneNumber.text);

}, 'Some error message');*/

var comment = mongoose.model('comment', commentSchema);

module.exports = comment;
