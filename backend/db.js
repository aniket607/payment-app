const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aniket607:ipsindore12@cluster0.hpty7.mongodb.net/paymentapp');

const userSchema = new mongoose.Schema({
    firstName: { type: String,trim:true},
    lastName: { type: String,trim:true },
    username:{type:String,trim:true},
    password:{type: String}
  });

const User = mongoose.model('User', userSchema);
module.exports = {User};