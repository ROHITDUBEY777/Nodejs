const collectANswers = require('./askmain');
const questions = [
   "What is your name",
   "where do you live",
   "What are you goin to do with NOde"
]




collectANswers(questions, (answers) =>{
    console.log('Thank you for your answers')
    console.log(answers);
    process.exit();
    
});