const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    status:{
        type:String,
        required:true
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

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;