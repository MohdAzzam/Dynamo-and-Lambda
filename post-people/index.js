const uuid = require('uuid').v4;
const People = require('./people-schema');

exports.handler = async (event) => {
    try {
        const id = uuid();
        const { name, age } = JSON.parse(event.body);
        let data = new People({ id, name, age });
        let newData = await data.save();
        return {
            statusCode: 201,
            body: JSON.stringify(newData)
        }
    } catch (err) {
        return {
            statusCode: 201,
            err: err.message
        }
    }
};