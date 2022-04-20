import { createServer } from 'http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hey Buddy</h1>');
  res.end();
});

server.listen(8000);

// import url from 'url';

// const address = 'https://www.w3.org/Provider/Style/dummy.html';

// const qParse = url.parse(address , true);

// console.log(`${qParse.host} ${qParse.path}`);


// import EventEmitter from 'events';

// const eventemitter = new EventEmitter();

// eventemitter.on('bhago' , () => {
//     const a = [1,2,3,4];
//     const b = [...a,5,6,7,8];
//     console.log(b);
// })
// eventemitter.emit('bhago');

// import path from 'path';

// const myPath = path.basename('C:\\temp\\myfile.html');

// console.log(myPath);


