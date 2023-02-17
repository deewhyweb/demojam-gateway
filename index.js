const express = require('express');
const app = express();

const state = { isReady: false };
const PORT = process.env["PORT"] ? process.env["PORT"] : 3000;
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(PORT);

app.use('/', require("./lib/routes"));


process.on('SIGTERM', function onSigterm () {
    console.info('Got SIGTERM. Graceful shutdown start now', new Date().toISOString())
    state.isReady = false;

});

io.on('connection', function (socket) {
    var entries = 0;
    console.log('connection')
    setInterval(() => {
        const max = 15;
        const min = 0;
        const selector = Math.floor(Math.random() * (+max - +min)) + +min;
        if (selector <= 2){
            entries++;
        }
        
        socket.emit('message', {entries});
    }, 100)
    socket.on('my other event', function (data) {
      console.log(data);
    });
});

