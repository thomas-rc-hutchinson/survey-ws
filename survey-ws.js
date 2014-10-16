var express = require('express');

var app = express();

//for request body
app.use(express.bodyParser());

require('./routes')(app);

app.listen(1222);
console.log("Listening on port 1222...");

var mongodb = require('mongodb');

mongodb.MongoClient.connect(uri, function(err, db) {
	//Maybe bind the db to the app context? Whilst connecting 
	//place a InMemoryDB, when connected persist contents of InMemoryDB
	//to DB and switch to Mongo 
	app.set("db", db)
})

 
