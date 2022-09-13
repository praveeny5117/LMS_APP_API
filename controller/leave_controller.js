const leaveService = require('../service/leave_service')

module.exports.getLeaveBalance = async (req, res) => {
    try {
        console.log(req.body)

    } catch (error) {
        if (error.name === "ValidationError")
            return res.status(500).send(error);
        else
            return res.status(500).send(error);
    }
}

