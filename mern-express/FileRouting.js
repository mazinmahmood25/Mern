import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8000;

const urlencodeparse = bodyParser.urlencoded({extended : true});

app.get('/form' , function(req , res){
    res.sendFile(__dirname + '/form.html', function() {
    });
});

app.post('/postdata',urlencodeparse,function(req , res ){
    if(req.body.email == "mazin@yopmail.com"){
        res.send(req.body.name);
    }else {
        res.send("Dafa Hojao");
    }
})
app.listen(port);


