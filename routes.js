module.exports = function(app){
    var surveys = require('./controllers');
    //app.get('surveys/:id', surveys.getServeyById);
    app.get('test', surveys.test);
    //app.post('surveys', surveys.createSurvey);
    //app.post('surveys/answer', surveys.answerSurvey);
}