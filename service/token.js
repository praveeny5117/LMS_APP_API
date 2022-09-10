
const bluebird = require('bluebird'),
token = require('../model/token');

module.exports.insert = record => {
    return new bluebird((resolve, reject) => {
        const document = new token(record);
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
        token.find(query, fields)
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
        token.findOne(query, fields)
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
        token.updateOne(query, { $set: record })
            .exec((err, doc) => {
                if (err)
                    reject(err);
                else
                    resolve(doc);
            });
    });
};