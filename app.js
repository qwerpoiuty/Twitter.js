var fs = require("fs");
var express = require("express");
var app = express();
var logger = require("morgan");
var path = require("path");
var swig = require('swig');
var routes = require('./routes/');
var http = require('http').Server(app);
var io  = require('socket.io')(http);

io.on('connection', function(socket){
    console.log("connected")
});

app.use('/', routes);
app.use(logger('dev'));
app.listen(3000);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(__dirname + '/public'));



swig.setDefaults({ cache: false });




