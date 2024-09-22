const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aniket607:ipsindore12@cluster0.hpty7.mongodb.net/paymentapp');

const userSchema = new mongoose.Schema({
    firstName: { type: String,trim:true},
    lastName: { type: String,trim:true },
    username:{type:String,trim:true, unique: true},
    password:{type: String}
  });
  const accountSchema=new mongoose.Schema({
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    balance:{
      type:Number,
      required:true
    }
  })

const User = mongoose.model('User', userSchema);
const Account=mongoose.model('Account',accountSchema)

module.exports = {User,Account};