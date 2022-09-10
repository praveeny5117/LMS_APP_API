const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    empId:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    },
    expiryOn:{
        type:Date,
        required:false
    },
  
    createdAt:{
        type:Date,
        required:true
    },
    updatedAt:{
        type:Date,
        required:true
    },
},{
strict: true,
versionKey: false})

const tokenDB = mongoose.model('token',schema);

module.exports = tokenDB;