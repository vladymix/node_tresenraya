const http = require('http');
const express = require('express');
const app  = express();
const server = http.createServer(app);

app.set('port',process.env.PORT || 8080);
app.use(express.static(__dirname+"/public"));

server.listen(app.get('port'), function(){
console.log("Hola cara cola");

});

/*http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('PRUEBA DESDE GIT HUB! by vlady');
    
}).listen(process.env.PORT || 8080);*/