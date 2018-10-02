var mongoose = require("mongoose");
var express = require("express")
var schema = require("./imp");
var router = express.Router();
mongoose.connect("mongodb://localhost:27017/work",function(err,data){
    if(err){
        console.log("unsucess");
    } else {
        console.log("sucess");
    }
    var usermodel = mongoose.model("usermodel", schema);
var userdata =({
    userName : 'akhil',
    password : 'akhilm'
});
var detailsave = new usermodel(userdata);
detailsave.save(detailsave,function(err,data){
    if(err){
        console.log("data saved unsucess");
    } else {
        console.log("data saved successfully");
    }
    
});
});
module.exports = router;