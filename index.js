import fs from 'fs';
import express from "express";


const app = express();
const port = 8000;
app.get('/' , function(req , res){
    // res.sendFile(__dirname + '/form.html', function() {
    // });
    app.set('view engine', 'ejs');
    const carheading = [{
        heading : 'Best Cars In World'
    }]
    const carlist = [{
        name :'Farari'
    },
    {
        name:'Mercedes'
    },
    {
        name:'Mustang GT'
    },
    {
        name:'BMW'
    },
    {
        name:'AUDI'
    },
    {
        name:'Jaguar'
    },
    {
        name:'FX'
    },
    {
        name:'Mehran'
    },
    {
        name:'Cultus'
    },
    {
        name:'VitZ'
    },
]
    res.render('carlist' , {carlist:carlist,carheading:carheading});
});app.listen(port);

// FOR DELETE FILES

// fs.unlink ("index2.js" , (err) => {
//     if(err) throw err;
//     console.log("Files Deleted");
// })

// FOR RENAME FILES

// fs.rename ('index.js' , 'index2.js' , () => {
//     console.log("Successfull");
// })

// fs.rename ('test' , 'Link' , () => {
//     console.log("Successfull");
// })

// FOR CREATE FOLDER

// fs.mkdir('test' , (err) => {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("Successfully Created");
// })

// FOR CREATE FILE

// fs.writeFile('Link/abcd.js', 'This Is ME' , (err) => {
//     if (err) throw err;
//     console.log('File is created successfully.');
// });


//

// fs.readdir("link", (err , files) => {
//     if (err) {
//         console.log(err);
//     }else {
//         console.log("Files Name");
//         const FileName = fs.readFileSync("Link");
//         for(const file of FileName) {
//             console.log(files);
//         };
//     };
// })
