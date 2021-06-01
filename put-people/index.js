const peopleSchema = require('./people-schema');

exports.handler = async (event)=>{
    try{
        const id = event.pathParameters ?event.pathParameters.id:null;
        const { name, age } = JSON.parse(event.body);
        let items;
        if(id){
            // items= await peopleSchema.query('id').eq(id).exec();
            items = await peopleSchema.update({id},{name ,age})
            // peopleSchema.
        }else{
            return 'No user Found';
        }

        return {
            statusCode : 201 , 
            body:JSON.stringify(items)
        }

    }catch(err){
        return {
            statusCode:500,
            err:err.mesaage
        }
    }
}