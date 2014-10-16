var surveys = {};
var surveysIds = [];

//multivalue map
var answers = {};


//TODO Fix
exports.flush = function(req, res){
	console.log("flush");
	surveys = {};
	surveysIds.length = 0;
	answers = {};
}


exports.getAllServeyIds = function(req, res){
	console.log("getAllServeyIds => ");
	res.send({"surveyIds" : surveysIds})
}

exports.getServeyById = function(req, res){
	var id = req.params.id
	console.log("getServeyById => " + id);
	res.send(surveys[id])
}

exports.createSurvey = function(req, res){
	var id = process.hrtime()[0];
	surveys[id] = req.body;
	surveysIds.push(id);
	console.log("createSurvey => " + id + " => " + JSON.stringify(req.body, null, 4));

	//TODO - Obtain IP address dynamically
	res.send("http://localhost:3001/surveys/" + id)
	res.status(202)
}


exports.answerSurvey = function(req, res){
	var id = req.body.surveyId;
	console.log("answerSurvey => " + id + " => " + JSON.stringify(req.body, null, 4));

	//TODO Clean this up, I'm newish to JS. Focus is on a quick prototype ;)
	if(typeof answers[id] == 'undefined'){
		answers[id] = []
	}
	answers[id].push(req.body)
	res.send("send...")
}

exports.getSurveyAnswers = function(req, res){
	var id = req.params.id;
	console.log("getSurveyAnswers => " + id);
	res.send([answers[id]])	
}