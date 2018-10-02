var mongoose = require("mongoose");
var express = require("express");
var schema1 = require("./schema");
var router = express.Router();
mongoose.connect("mongodb://localhost:27017/file1",function(err,data){
    if(err){
        console.log("error connecting mongoose");
    } else {
        console.log("mongoose connected succesfully");
    }
});
var usermodel = mongoose.model("usermodel",schema1);
var details = ({
    username : "hello",
    password : "hai"
});
var userdata = new usermodel(details);
userdata.save(userdata,function(err,data){
if(err){
    console.log("error saving the data");
} else {
    console.log("data saved sucessfully");
}
});
module.exports = router;