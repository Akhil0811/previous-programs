var express = require('express'),
    mongoose = require('mongoose'),
    getSchema = require('./file3'),
    data,
    details,
    schemaModel,
    router = express.Router();

mongoose.connect("mongodb://localhost:27017/userData", function (err, data) {
    if (err) console.log("err");
    else console.log("success");

});

details = ({
    username: 'akhildd',
    password: 'akhild'
});

schemaModel = mongoose.model("schemaModel", getSchema);

data = new schemaModel(details);

data.save(data, function (err, resp) {
    if (err) {
        console.log("err");
    } else {
        console.log("data inserted successfully");
    }
});


module.exports = router;