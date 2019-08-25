const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const server = express();

server.use(express.static( __dirname + "./public"));
server.use(express.static(__dirname + "/public"));

server.use(bodyParser.urlencoded({extend: true}));
server.use(bodyParser.json());
server.set('view engine', 'ejs');


server.use(function(req,res,next) { 
    res.header("Access-Control-Allow-Origin, "*" ");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Routers

const indexRouters = require("./routes/index");

server.use(indexRouters)


server.listen(3000,function(req,res){
    console.log('rodando servidor modelo em dev') 
});


// mongoose.connect("mongodb://");
