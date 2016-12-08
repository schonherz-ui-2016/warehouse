var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.use(express.static('./app'));
server.use(bodyParser.json());

server.get('/', function(req, res){
    res.sendfile('app/index.html', {root: __dirname});
});

server.listen(3000, function () {
    console.log('Server listens on port 3000');
});
