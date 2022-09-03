const express = require('express');
const route = express.Router()
const controller = require('../controller/onBoard_controller')

route.post('/addEmployee',controller.addEmployee)  

module.exports = route