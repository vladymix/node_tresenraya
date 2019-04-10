const http = require('http');
const express = require('express');
const app  = express();
//const io = require('socket.io');

const server = http.createServer(app);

app.set('port',process.env.PORT || 8080);

app.use(express.static(__dirname+"/public"));

app.get('/', (req,res)=>{
    res.render(index.html)
})

server.listen(app.get('port'), function(){
    console.log("Servidor iniciado en port:"+ app.get('port'));
});

//var socket = io.listen(server);

/*socket.on('connection', function(socket){
 console.log('cliente conectado');
})*/

/*http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('PRUEBA DESDE GIT HUB! by vlady');
    
}).listen(process.env.PORT || 8080);*/
