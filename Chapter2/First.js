let hello="This is Rohit Dubey Learning Node js";
let slicehello = hello.slice(17);
console.log(`who let the ${slicehello} out?`);

const path = require("path");

console.log(__dirname);
console.log(`the file name is ${path.basename(__filename)}`);

for(let key in global){
    console.log(key);
    
}
console.log(process.argv);

function grab(flag){
    let indexafterflag = process.argv.indexOf(flag) + 1 ;
    return process.argv[indexafterflag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);


process.stdout.write("Hello \n\n");

const questions = [
    "What is your name",
    "where do you live",
    "what is your preferred programming language "
]

const answers = [
   
]
function ask(i=0){
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

process.stdin.on("data",function(data){
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    }
    else{
        process.exit();
    }
});

ask(answers.length);

process.on("exit",function(){
    process.stdout.write("\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]}`)
})