var express = require('express'),
    file2 = require('./file2');
app = express();
app.listen("8000");
app.use('', file2);