import {createServer} from 'http';
import fs from 'fs';

// const CreatingServer = createServer((req , res) => {
//     fs.readFile('index.json' , function (err,data) {

//         if (err) {
//             res.writeHead('404');
//             res.end(JSON.stringify(err));
//             return;
//         }
//         res.writeHead(200);
//         res.end(data);
//     });
// }).listen(8080);


const CreatingServer = createServer((req , res) => {
    const dataJson = () => {
        const ContentData = {
            "name" : "Mazin",
            "work" : "Develpor",
            "Sport" : "Cricket",
            "Task" : "FileRead"
        }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({name: dataJson.Mazin , work : dataJson.Develpor , Sport : dataJson.Cricket , Task : dataJson.FileRead}));
    res.end()
}).listen(8080);


