const express = require('express')
const app = express();
const http = require('http')
const Port =  process.env.Port || 5000;
const cors = require('cors')
const myRouter  = require('./router/router');
const server = http.createServer(app)
const socketio =  require('socket.io')
const io =  socketio(server)


app.use(cors())

io.on('connection', (socket) => {
    console.log('A user has connected');
    socket.on('disconnect', function () {
       console.log('A user has disconnected');
    });
    
 }); 

app.use('/',myRouter)
app.listen(Port,()=>{
    console.log(`App is running at http://localhost:${Port}`)
})
