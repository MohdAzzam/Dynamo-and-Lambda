const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
    id: String,
    name: String,
    age:String
});

module.exports = dynamoose.model('perosn', personSchema);