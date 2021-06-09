const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

server.listen(8000, () => {
    console.log('listening on *:3000');
});

io.on('connection', (socket) => {
    console.log(`a user connected ${socket.id}`);
    socket.emit('olá', 'bem vindo ao server');
});