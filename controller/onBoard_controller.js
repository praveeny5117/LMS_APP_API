const Employee = require('../model/employee')

module.exports.addEmployee = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Bad request' })
    }
    req.body.createdAt=new Date();
    req.body.updatedAt= new Date()

    const employee = new Employee(req.body)
console.log(req.body)
    employee.save().then(data => {
        res.send(data);
    })
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: err.message })
        })
}
