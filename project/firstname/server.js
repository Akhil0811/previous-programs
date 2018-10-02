var express = require("express");
var app = express();
var bodyparser = require("body-parser")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({"extended":false}));
app.get ('/',function(req,res){
    res.send('index.html');

});
app.post("/student-details",function(req,res){
    var first = req.body.firstName +''+req.body.lastName;
    res.send(first+"submitted successfully");
})
app.listen("8080");
console.log("server running");