const Userdb = require('../model/model')

module.exports.adduser = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Bad request' })
    }
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
        phone: req.body.phone,
        address: req.body.address,
        status:"Active",
        createdAt: new Date(),
        updatedAt: new Date()
    })

    user.save(user).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}

module.exports.getActiveuser = (req, res) => {
    Userdb.find().then(data => {
        res.status(200).send(data)
    })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}

module.exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Bad request' })
    }
    const id = req.body._id
    req.body.updatedAt = new Date();
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })

} 

module.exports.delete = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Bad request' })
    }
    const id = req.body._id
    Userdb.findByIdAndDelete(id)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
} 