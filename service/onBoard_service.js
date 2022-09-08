
const bluebird = require('bluebird'),
employee = require('../model/employee');

module.exports.insert = record => {
    return new bluebird((resolve, reject) => {
        const document = new employee(record);
        document.save((err, doc) => {
            if (err)
                reject(err);
            else
                resolve(doc);
        });
    });
};

module.exports.find = (query = {}, fields = {}) => {
    return new bluebird((resolve, reject) => {
        employee.find(query, fields)
            .exec((err, doc) => {
                if (err)
                    reject(err);
                else
                    resolve(doc);
            });
    });
};

module.exports.findOne = (query = {}, fields = {  }) => {
    return new bluebird((resolve, reject) => {
        employee.findOne(query, fields)
            .exec((err, doc) => {
                if (err)
                    reject(err);
                else
                    resolve(doc);
            });
    });
};


module.exports.updateOne = (query = {}, record = {}) => {
    return new bluebird((resolve, reject) => {
        employee.updateOne(query, { $set: record })
            .exec((err, doc) => {
                if (err)
                    reject(err);
                else
                    resolve(doc);
            });
    });
};