


var mongoose = require("mongoose");
var userschema = {
    name: {type: String},
    username :{type: String},
    email :{type: String}
}
var usermodel = mongoose.model("usermodel",userschema);
var userdetails;

module.exports = {
    myDetails : function () {
        return userdetails = {
            name: "akhillll",
            username :"makdhdoooo",
            email :"mkisugus@gmail.commmmm"
        } 
    }
};