var express = require("express"),
    mongoose = require("mongoose"),
    app = express();
    app.listen("8000",function() {
        console.log("listening");
    });
    // app.use('' , function(req , res) {
    //   res.send("hello");
    // })
    app.use('/sams', require('./schema'));
    
mongoose.connect("mongodb://localhost:27017/www", function (err, data) {
    if (err) {
        console.log("err");
    } else {
        console.log("succesfully connected");
    }
});


module.exports = app;
