const peopleSchema = require('./people-schema');

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let items;
        // items= await peopleSchema.query('id').eq(id).exec();
        items = await peopleSchema.delete({ id })
        // peopleSchema.
        return {
            statusCode: 201,
            body: JSON.stringify(items)
        }

    } catch (err) {
        return {
            statusCode: 500,
            err: err.mesaage
        }
    }
}