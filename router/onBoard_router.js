const express = require('express');
const route = express.Router()
const controller = require('../controller/onBoard_controller')

route.post('/addEmployee',controller.addEmployee)  
route.get('/employeeList',controller.getEmployee)  
route.post('/login',controller.login)  
route.post('/checkCode',controller.codeCheck)  
route.post('/activate',controller.resetPassword)  

module.exports = route