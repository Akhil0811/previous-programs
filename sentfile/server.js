var express = require("express");
var app = express();
var mailer = require("express-mailer");
mailer.extend(app,{
    from: 'no-reply@example.com',
    host: 'smtp.gmail.com',
    secureConnection: true,
    transportMethod: 'SMTP',
    auth:{
        user: 'mogudampallyakhil@gmail.com',
        pass: 'rameshkondalu'
    }
});
app.get('/message',function(req,res,next){
    app.mailer.send('email',{
        to: 'ajithckt256@gmail.com',
        subject: 'Test Mail',
        otherProperty: 'other property'
    } ,function(err){
        if(err){
        console.log(err);
        res.send('error in sending mail');
        }
        res.send("email sent");
    });
});
app.listen("8080");
console.log("server listening");