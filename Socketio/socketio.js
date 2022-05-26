import express from "express";
import http from "http";
import { Server } from "socket.io";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const server = http.createServer(app);
const io = new Server(server);
const __dirname = dirname(fileURLToPath(import.meta.url));



app.get('/' , function(req , res) {
    res.sendFile(__dirname + '/chat.html');
})

io.on('connection', (socket) => {
    console.log(socket.conn.server.clientsCount);
    // console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('chat_player' , () => {
        io.emit('chat_player', socket.conn.server.clientsCount);
        console.log('chat:' + socket.conn.server.clientsCount);
    });

    socket.on('typing', (data)=>{
        if(data.typing==true)
           io.emit('display', data)
        else
           io.emit('display', data)
      })
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This 

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
});


server.listen(8000, () => {
console.log('listening on *:3000');
});