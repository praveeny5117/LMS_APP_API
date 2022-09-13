const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    empObjID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    },
    empID:{
        type:Number,
        required:true
    },
    empName:{
        type:String,
        required:true
    },
    sickLeaveBal:{
        type:String,
        required:true
    },
    casualLeaveBal:{
        type:String,
        required:true
    },
   
    previllageLeaveBalance:{
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

const Employee = mongoose.model('leaveBalance',schema);

module.exports = Employee;