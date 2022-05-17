import express from "express";

const app = express();
const port = 8000;

app.get('/' , function(req,res){
    let salaries = [2000,3000,4000];
    const getSalary = () => {
        return new Promise((resolve,reject) => {
            resolve(salaries[1]);
        })
    }
    const DataBio = () => {
        let UserData = {
            "1": {
                fname : "Mazin",
                lname : "Mahmood",
                age : 21
            },
            "2": {
                fname : "Faraz",
                lname : "Aba",
                age : 24
            }
        }
        return new Promise((resolve,reject) => {
            resolve((UserData[2]));
        })
    }
    
    const getMessage = () => {
        const Datele = new Date;
        return new Promise((resolve,reject)=>{
            if(Datele.getDate() > 15){
                resolve((salaries[1]));
            }else {
                reject(("SALARY PAID HURRY!"));
            }
        })
    }

    getSalary().then((salary) => {
        console.log(salary);
        return DataBio();
    }).then((resbio) => {
        console.log(resbio);
        getMessage().then((res=>{
            console.log(`${resbio.fname} ${resbio.lname} ${res}`);
        })).catch((err) => {
            console.log(`${resbio.fname} ${resbio.lname} ${err}`);
        })
    })
    res.end();
})
app.listen(port);

