import fs from 'fs';

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

fs.readdir("link", (err , files) => {
    if (err) {
        console.log(err);
    }else {
        console.log("Files Name");
        const FileName = fs.readFileSync("Link");
        for(const file of FileName) {
            console.log(files);
        };
    };
})
