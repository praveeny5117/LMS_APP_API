const express = require('express');
const route = express.Router()
const controller = require('../controller/controller')



route.post('/add',controller.adduser)  
route.get('/get',controller.getActiveuser)  
route.post('/update',controller.update)  
route.post('/delete',controller.delete)  

module.exports = route