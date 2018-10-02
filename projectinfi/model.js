// var mongoose = require('mongoose')
// var newschema = ({
//     name : String,
//     phno : Number,
//     pass : String
// }); 

// var newmodel = mongoose.model("newmodel", newschema);

// var details = ({
//     'name' : 'ldghs',
//     'phno' : '89623235',
//     'pass' : 'gsrtdsa'

// });

// var newsave = new newmodel(details);

// newsave.save(newsave , function (err, data){
//     if (err) {
//         console.log("err");
//     } else {
//         console.log("sucess");
//     }
// }); 


var getSchema = require('./schema');
console.log(getSchema);

