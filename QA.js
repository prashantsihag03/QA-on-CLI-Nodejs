const collectAnswers = require('./collectAnswers');

const questions = [
    "What is your name ?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

collectAnswers(questions, answers => {
    console.log('Thanks you for your answers. ');
    console.log(answers);
    process.exit();
});