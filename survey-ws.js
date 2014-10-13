var express = require('express');

var app = express();

//for request body
app.use(express.bodyParser());

require('./routes')(app);

 

app.listen(1222);
console.log("Listening on port 1222...");