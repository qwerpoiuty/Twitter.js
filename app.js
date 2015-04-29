var fs = require("fs");
var express = require("express");
var app = express();
var logger = require("morgan");
var path = require("path");

app.use(logger('dev'));
app.listen(3000);

app.get('/', function(req,res){
   res.send("a;sldkjf");
});