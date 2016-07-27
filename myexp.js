var express = require("express");

var app = express();

app.get("/", function(req, res){
 res.send("<h1>Hello world</h1>");
})

app.get("/data", function(req, res){
 var obj = {"name":"Venkat", "age": 24};
 res.json(obj);
})

app.listen(8080, function(err){
 console.log("Server started at port 8080");
})
