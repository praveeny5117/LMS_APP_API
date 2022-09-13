
const bluebird = require('bluebird'),
leave = require('../model/leave');

module.exports.insert = record => {
    return new bluebird((resolve, reject) => {
        const document = new leave(record);
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
        leave.find(query, fields)
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
        leave.findOne(query, fields)
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
        leave.updateOne(query, { $set: record })
            .exec((err, doc) => {
                if (err)
                    reject(err);
                else
                    resolve(doc);
            });
    });
};