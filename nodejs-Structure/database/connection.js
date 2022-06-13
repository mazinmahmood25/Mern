import { MongoClient , ObjectId} from "mongodb";
// import mongoose from "mongoose";
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
    return client;
};

export { dbconnection , ObjectId};


// const dbData  = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URL, {})
//     }
//     catch (err) {
//         console.log(err);
//         process.exit(1)
//     }
// }

// export {dbData};