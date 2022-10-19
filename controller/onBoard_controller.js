const employeeService = require('../service/onBoard_service')
const tokenService = require('../service/token')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()
const emailService = require('../email/emailService')

module.exports.addEmployee = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({ message: 'Bad request' })
        }
        let userCode = "Test@123"
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(userCode, salt);
        req.body.createdAt = new Date();
        req.body.updatedAt = new Date()

        let insertedData = await employeeService.insert(req.body)
        if (insertedData) {
            res.status(200).send(insertedData);
        }

    } catch (error) {
        console.log(error)
        if (error.name === "ValidationError")
            return res.status(500).send(error);
        else
            return res.status(500).send(error);
    }
}

module.exports.login = async (req, res) => {
    try {
        let employeeData = await employeeService.findOne({ empEmail: req.body.email });
        if (employeeData !== null) {
            if (employeeData.status == 'A') {
                if (await bcrypt.compare(req.body.password, employeeData.password)) {
                    let obj = {
                        empId: employeeData.empID,
                        token: generateToken(employeeData),
                        expiryOn: new Date(),
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }
                    let tokenData = await tokenService.insert(obj)
                    if (tokenData !== null) {
                        // let obj = {
                        //     sub: 'Hello',
                        //     content: 'Hello Test',
                        //     toEmail: 'praveeny@tangotech.co.in'
                        // }
                        // await emailService.sendEmail(obj)
                        res.status(200).send({ message: 'Logged in Successfully', data: tokenData })
                    }
                } else {
                    res.status(400).send({ message: 'Incorrect password' })
                }
            } else {
                res.status(400).send({ message: "Account not activated Please activate your account" })
            }
        } else {
            res.status(400).send({ message: 'Email Not exist' })
        }
    } catch (error) {
        if (error.name === "ValidationError")
            return res.status(500).send(error);
        else
            return res.status(500).send(error);
    }
}


module.exports.codeCheck = async (req, res) => {
    try {
        let employeeData = await employeeService.findOne({ empEmail: req.body.email });
        if (employeeData !== null) {
            if (employeeData.status == 'I') {
                if (await bcrypt.compare(req.body.password, employeeData.password)) {
                    res.status(200).send({ message: 'Correct Code' })
                } else {
                    res.status(400).send({ message: 'Incorrect Code' })
                }
            }
        } else {
            res.status(400).send({ message: 'Email Not exist' })
        }
    } catch (error) {
        console.log(error)
        if (error.name === "ValidationError")
            return res.status(500).send(error);
        else
            return res.status(500).send(error);
    }
}

module.exports.resetPassword = async (req, res) => {
    try {
        let employeeData = await employeeService.findOne({ empEmail: req.body.email });
        if (employeeData !== null) {
            if (employeeData.status == 'I') {
                let activateData = await employeeService.updateOne({
                    empEmail: req.body.email
                }, { password: req.body.password })
                if (activateData.modifiedCount)
                    res.status(200).send({ message: "Account Activated Successfully" })
                else {
                    res.status(400).send({ message: 'Please enter new password' })
                }
            }
        } else {
            res.status(400).send({ message: 'Email Not exist' })
        }
    } catch (error) {
        console.log(error)
        if (error.name === "ValidationError")
            return res.status(500).send(error);
        else
            return res.status(500).send(error);
    }
}

module.exports.getEmployee = async (req, res) => {
    try {
        let employeeData = await employeeService.find();
        if (employeeData.length) {
            res.status(200).send(employeeData)
        } else
            res.status(204).send()
    } catch (error) {
        if (error.name === "ValidationError")
            return res.status(500).send(error);
        else
            return res.status(500).send(error);
    }
}

module.exports.getSingleEmployee = async (req, res) => {
    try {
        let employeeData = await employeeService.findOne({ empEmail: req.body.email });
        if (employeeData !== null) {
            res.status(200).send(employeeData)
        } else
            res.status(204).send('not exist')
    } catch (error) {
        if (error.name === "ValidationError")
            return res.status(500).send(error);
        else
            return res.status(500).send(error);
    }
}

function generateToken(input) {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: input.empID,
    }
    return jwt.sign(data, jwtSecretKey);
}

module.exports.getManagersList = async (req, res) => {
    try {
        let query = { status: 'A', role: 'manager' }
        let managersList = await employeeService.find(query);
        if (!managersList.length) {
            res.status(204).send('No Records Found!')
            return
        }
        res.status(200).send(managersList)
    } catch (error) {
        if (error.name === "ValidationError")
            return res.status(500).send(error);
        else
            return res.status(500).send(error);
    }
}

