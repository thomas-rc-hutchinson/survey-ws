var surveys = {};


/*exports.getServeyById = function(req, res){
	var id = req.params.id
	console.log("getServeyById => " + id);
	res.send([surveys[id]])
}

exports.createSurvey = function(req, res){
	var id = process.hrtime()[0];
	surveys[id] = req.body;
	console.log("createSurvey => " + id + " => " + JSON.stringify(req.body, null, 4));
	res.send("http://localhost:3001/surveys/" + id)
	res.status(202)
}*/

exports.test = function(req, res){
	res.send(1)
}

/*exports.answerSurvey = function(req, res){
	var id = req.body.surveyId;
	console.log("answerSurvey => " + id + " => " + JSON.stringify(req.body, null, 4));
}*/