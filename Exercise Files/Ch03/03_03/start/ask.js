const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "what is your name?",
  "where do you live?",
  "what are you going to do with node?"
];

function collectAnswers(questions, done){
  const answers = [];

  const questionAnswered = (answer) => {
    answers.push(answer.trim());
    if(answers.length < questions.length) {
      rl.question(
        questions[answers.length],
        questionAnswered
      );
    } else {
      return done(answers)
    }
  };
  rl.question(questions[0], questionAnswered)
}

collectAnswers(questions, (answers) => {
  console.log("thanks for the answers")
  console.log(answers);
  process.exit();
})

rl.question("How do you like Node?", (answer) => {
  console.log(`Your answer: ${answer}`);
});
