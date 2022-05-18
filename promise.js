import express from "express";
import fetch from 'node-fetch';

const app = express();
const port = 8000;

// app.get('/' , function(req,res){
//     let salaries = [2000,3000,4000];
//     const getSalary = () => {
//         return new Promise((resolve,reject) => {
//             resolve(salaries[1]);
//         })
//     }
//     const DataBio = () => {
//         let UserData = {
//             "1": {
//                 fname : "Mazin",
//                 lname : "Mahmood",
//                 age : 21
//             },
//             "2": {
//                 fname : "Faraz",
//                 lname : "Hussain",
//                 age : 24
//             }
//         }
//         return new Promise((resolve,reject) => {
//             resolve((UserData[2]));
//         })
//     }
    
//     const getMessage = () => {
//         const Datele = new Date;
//         return new Promise((resolve,reject)=>{
//             if(Datele.getDate() > 15){
//                 resolve((salaries[1]));
//             }else {
//                 reject(("SALARY PAID HURRY!"));
//             }
//         })
//     }

    // getSalary().then((salary) => {
    //     console.log(salary);
    //     return DataBio();
    // }).then((resbio) => {
    //     console.log(resbio);
    //     getMessage().then((res=>{
    //         console.log(`${resbio.fname} ${resbio.lname} ${res}`);
    //     })).catch((err) => {
    //         console.log(`${resbio.fname} ${resbio.lname} ${err}`);
    //     })
    // })

//     async function resolveApi () {
//         const sal = await getSalary();
//         const bio = await DataBio();
//         console.log(sal);
//         console.log(bio);
//         const str = "All Api Are Getting Success";
//         return str;
//     }
//     resolveApi().then((result) => {
//         console.log(result);
//     })
//     res.end();
// })
app.listen(port);



app.get('/api/:paise' , (req,res) => {

    const money = () => {
        return new Promise((resolve,reject) => {
            fetch('https://v6.exchangerate-api.com/v6/30e89d3f9ebd8442e7458b24/latest/USD').then((response)=>{resolve(response.json())});
        })
    }
    money().then((res=>{
        console.log(res.conversion_rates);
    }));

    async function moneyByAwait() {
        const rates = await fetch('https://v6.exchangerate-api.com/v6/30e89d3f9ebd8442e7458b24/latest/USD');
        // console.log(rates.json());
        return rates.json();
    }
    moneyByAwait().then((res)=> {
        // console.log(res.conversion_rates.PKR);
        console.log(req.params.paise * res.conversion_rates.PKR);
    })
})