const express = require('express');
const route = express.Router()
const controller = require('../controller/onBoard_controller')

route.post('/addEmployee',controller.addEmployee)  
route.get('/employeeList',controller.getEmployee)  
route.post('/login',controller.login)  

module.exports = route