


var Mongoose = require("mongoose");
Mongoose.connect("mongodb://localhost:27017/complete", function (err, data) {
    if (err) {
        console.log("Err in connecting");
    } else {
        console.log("successfully connected");
    }
});

