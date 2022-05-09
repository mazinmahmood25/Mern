import fs from 'fs';
import express from "express";


const app = express();
const port = 8000;

app.get('/car' , function(req , res){
    // res.sendFile(__dirname + '/form.html', function() {
    // });
    app.set('view engine', 'ejs');
//     const carheading = [{
//         id : 1,
//         heading : 'Best Cars In World'
//     },
//     {
//     id : 2,
//     heading : 'Faltu cAR'
// }
// ]
    const cheading = "All Cars Of This ShowRoom";
    const carlist = [{
        name :'Farari',
    },
    {
        name:'Mercedes',
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
    // let obje =  carlist.find(car => car.id == req.params.id  );
    // let objec =  carheading.find(carheading => carheading.id == req.params.id  );
    res.render('carlist' , {carlist:carlist,cheading:cheading});
});

app.get('/car/:id' , function(req , res){
    // res.sendFile(__dirname + '/form.html', function() {
    // });
    app.set('view engine', 'ejs');
//     const carheading = [{
//         id : 1,
//         heading : 'Best Cars In World'
//     },
//     {
//     id : 2,
//     heading : 'Faltu cAR'
// }
// ]
    const carlist = [{
        id : 1,
        name :'Farari',
        heading : 'Best Cars In World'
    },
    {
        id : 2,
        name:'Mercedes',
        heading : 'Heloo'
    },
    {
        id : 3,
        name:'Mustang GT'
    },
    {
        id : 4,
        name:'BMW'
    },
    {
        name:'AUDI'
    },
    {
        id : 5,
        name:'Jaguar'
    },
    {
        id : 6,
        name:'FX'
    },
    {
        id : 7,
        name:'Mehran'
    },
    {
        id : 8,
        name:'Cultus'
    },
    {
        id : 9,
        name:'VitZ'
    },
]
    let obje =  carlist.find(car => car.id == req.params.id  );
    // let objec =  carheading.find(carheading => carheading.id == req.params.id  );
    res.render('carlist' , {carlist:[obje]});
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
