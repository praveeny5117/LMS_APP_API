const express = require('express');
const route = express.Router()
const controller = require('../controller/onBoard_controller')

route.post('/addEmployee',controller.addEmployee)  
route.get('/employeeList',controller.getEmployee)  
route.post('/getSingleEmployee',controller.getSingleEmployee)  
route.post('/login',controller.login)  
route.post('/checkCode',controller.codeCheck)  
route.post('/activate',controller.resetPassword)  
route.get('/getmanagerlist',controller.getManagersList)  

module.exports = route