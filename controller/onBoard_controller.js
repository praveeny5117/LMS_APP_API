const employeeService = require('../service/onBoard_service')

module.exports.addEmployee = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({ message: 'Bad request' })
        }
        req.body.password = "Lms@123"
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

module.exports.login = async (req, res) =>{
    try {
        let employeeData = await employeeService.findOne({email:req.body.email});
        if(employeeData.password == req.body.password)
        res.send({message:'Logged in Successfully'})
        else
        res.send({message:'Incorrect password'})
    
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
        if (employeeData.length){
            res.status(200).send(employeeData)
        }else
            res.status(204).send()
    } catch (error) {
        if (error.name === "ValidationError")
            return res.status(500).send(error);
        else
            return res.status(500).send(error);
    }
}