import express from "express";

const app = express();
const port = 8000;

app.get('/' , (req,res) => {

    const timefunc = () => {
        return new Promise((resolve,reject) => {
            resolve("Resolve");
        })
    }

    async function naamsochrahahu () {
        const intazar = await timefunc();
        console.log("Working");
    }

    naamsochrahahu();
    res.end();
})

app.listen(port);