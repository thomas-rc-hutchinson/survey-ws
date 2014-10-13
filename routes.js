module.exports = function(app){
    var surveys = require('./controllers');
    app.get('/rest/survey/:id', surveys.getServeyById);
    app.get('/rest/survey/:id/report', surveys.getSurveyAnswers);
    app.post('/rest/survey', surveys.createSurvey);
    app.post('/rest/survey/answer', surveys.answerSurvey);
}