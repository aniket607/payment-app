const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aniket607:ipsindore12@cluster0.hpty7.mongodb.net/');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true ,trim:true},
    lastName: { type: String, required: true,trim:true },
    userName:{type:String,required:true,trim:true},
    password:{type: String,required:true}
  });

const User = mongoose.model('User', userSchema);
module.exports = User;