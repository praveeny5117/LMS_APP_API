const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    empID:{
        type:Number,
        required:true
    },
    empName:{
        type:String,
        required:true
    },
    empDesignation:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
     role:{
        type:String,
        required:true,
        enum:['employee','hr','manager'],
        default:'employee'
    },
    empEmail:{
        type:String,
        required:true
    },
    empPhone:{
        type:Number,
        required:true
    }, 
    empGender:{
        type:String,
        required:true
    },
    empBlood:{
        type:String,
        required:true
    },
    empDOB:{
        type:Date,
        required:false
    },
    empDOJ:{
        type:Date,
        required:true
    },
    empCity:{
        type:String,
        required:false
    },
    empState:{
        type:String,
        required:false
    },
    empCountry:{
        type:String,
        required:false
    },
    status:{
        type:String,
        required:true,
        enum:['A','I'],
        default:'I'
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

const Employee = mongoose.model('employee',schema);

module.exports = Employee;