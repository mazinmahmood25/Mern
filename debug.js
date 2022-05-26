import express from "express";

const app = express();
const port = 8000;

app.get('/' , (req,res) => {

    const myarr = [2000,2001,2002,2003,2004,2005];
    let myDOB = myarr[0];
    if(myDOB){
        myarr.forEach(element => console.log(element));
    }
    return true;
})
app.listen(port);