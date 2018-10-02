var express = require("express"),
 bodyparser = require("body-parser"),
 mongoose = require("mongoose"),
 schema = require("./imp"),
  app = express(),
  router = express.Router(),
  userModels;
  app.listen("8000", function() {
      console.log("port connected succesfully");
  })

mongoose.connect("mongodb://localhost:27017/work", function (err, data) {
    if(err) console.log("error in connection");
     else {
        console.log("database connected successfully");
    }
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({"extended":false}));

userModels = mongoose.model("userModels", schema);


app.post("/hello", function (req, res) {
var userName = req.body.userName,
    password = req.body.password;

    userModels.findOne({"userName": 'akhil'} , function (err, resp) {
     console.log(resp);
    if(err) res.send({"user":"error"});
    else if (resp) {
        res.send({"user":"already exists"});
    } else {
        res.send({"user":"register successfully"});
    }
    });
    
});

