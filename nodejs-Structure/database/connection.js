import { MongoClient, Object } from "mongodb";
const dbconnection = async function () {
    const client = new MongoClient(process.env.MONGO_URL);
    try{
        await  client.connect();
    }catch(err){
        console.log(err);
    }
    finally{
        // await client.close();
    }
};

module.exports = {dbconnection};