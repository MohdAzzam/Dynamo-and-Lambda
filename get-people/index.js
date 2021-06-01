const peopleSchema = require('./people-schema');

exports.handler = async (event)=>{
    try{
        const id = event.pathParameters ? event.pathParameters.id : null;
        let items;
        if(id){
            items= await peopleSchema.query('id').eq(id).exec();
            items=items[0]
        }else{
            items = await peopleSchema.scan().exec();
        }

        return {
            statusCode : 200 , 
            body:JSON.stringify(items)
        }

    }catch(err){
        return {
            statusCode:500,
            err:err.mesaage
        }
    }
}