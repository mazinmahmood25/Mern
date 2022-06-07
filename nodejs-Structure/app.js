import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import {router} from './routes/route.js';
// var path = require('path');
import { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));
import path from 'path';
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/', express.static(path.join(__dirname, 'public')))
const port = process.env.PORT;

// var routing = router();
// ...
app.use('/', router);
app.listen(port,function(){
    console.log("SERVER RUN")
    // console.log(process.env)
})


// const uri = "mongodb+srv://mazin:Developer006@cluster0.4cgs4zv.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// app.get('/' , function (req , res) {
//     client.connect( async (err) => {
//         console.log(client)
//         if (err) throw err;
//         const userCollection = client.db("codegirls").collection("UsersColection");
//         await userCollection.insertOne({name:"mazin"} , (err , result) => {
//             if (err) throw err;
//             if(result.acknowledged) {
//                 console.log(`Document Inserted Successfully!`);
//             }else {
//                 console.log("Not Inserted");
//             }
//             res.redirect('/');
//         })
//         // perform actions on the collection object
//         // client.close();
//     });
//     console.log("after close , inside add");
// })
