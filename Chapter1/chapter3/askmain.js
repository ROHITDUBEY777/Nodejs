const readline = require("readline");

const r2 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});



module.exports = (questions,done) =>{
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = (answer) =>{
        answers.push(answer.trim());
        if(answers.length < questions.length ){
            r2.question(
                questions[answers.length],
                questionAnswered
            )
        }else{
            return done(answers);
                }
    };
    r2.question(questions[0],questionAnswered);
}
