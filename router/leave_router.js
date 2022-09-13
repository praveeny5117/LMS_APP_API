const express = require('express');
const route = express.Router()
const controller = require('../controller/leave_controller')

route.post('/getLeaveBalance',controller.getLeaveBalance)  


module.exports = route