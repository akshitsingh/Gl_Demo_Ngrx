
const mongoose = require('mongoose');
const validator = require('validator');


const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Please enter your name'],
    },
    phone : {
        type : String,
        required : [true,'Please enter your name phone'],
        maxLength : ['10','phone number should not be exceeded more than 10 digit']
    },
    address :{
        type :String,
        required : [true,'Please enter your name address'],
    },
    city :{
        type :String,
        required : [true,'Please enter your name city'],
    },
    email : {
        type : String,
        required : [true,'Please enter your email'],
        unique : true,
        validate : [validator.isEmail ,'Please enter a valid email']
    },
    password : {
        type : String,
        required : [true,'Please enter new password']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('student',studentSchema);