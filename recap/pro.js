var express = require("express");
var mongoose = require("mongoose");
var app = express();
var schema1 = require("./schema");
var bodyparser = require("body-parser");
var router = express.Router();
mongoose.connect("mongodb://localhost:27017/file1",function(err,data){
if(err){    
console.log("error in connecting mongo");
} else {
    console.log("mongo connected succesfully");
}
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({"extended":false}));
var usermodel = mongoose.model("usermodel",schema1);
app.post("/check",function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    usermodel.findOne({'username':'hello'},function(err,resp){
console.log(resp);
if(err){
    res.send({"user":"error"});
}
else if(resp){
    res.send({"user":"already exist"});
}
else{
    res.send({"user":"login success"});
}
    });
});
app.listen("8000");
console.log("server listening")