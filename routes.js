module.exports = function(app){
    var surveys = require('./controllers');
    app.get('/rest/survey', surveys.getAllServeyIds);
    app.get('/rest/survey/:id', surveys.getServeyById);
    app.get('/rest/survey/:id/report', surveys.getSurveyAnswers);
    app.get('/rest/survey/flush', surveys.flush);
    app.post('/rest/survey', surveys.createSurvey);
    app.post('/rest/survey/answer', surveys.answerSurvey);
}

/**
1. POST /rest/survey                         CREATE SURVEY
2. GET /rest/survey/:id                      GET SURVEY BY ID (USED FOR 5, CLIENT NEEDS TO KNOW THE SURVEY THEY ARE FILLING OUT)1
3. POST /rest/survey/answer                  SUBMIT SURVEY ANSWERS  
4. GET /rest/survey/:id/report               GET REPORT BY ID    
5. GET /rest/survey/                         GET ALL SURVEY IDS
6. POST /rest/survey/answer                  FLUSH  
**/