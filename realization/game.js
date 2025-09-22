console.log("answers:");
console.log("C1: Variables");
console.log("C2: Functions");
console.log("C3: Loops");
console.log("C4: condition");
console.log("C5: strings");
console.log("C6: committing changes");
console.log("C7: linking the git to github");
console.log("C8: initiating a git");

function checkAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
    score++;
    alert("correct!");
} else {
    alert("wrong!");}}


let score = 0;
let A1 = prompt("what do you call a variable that is inside quotes?");
checkAnswer(A1, "C5");
let A2 = prompt("what do you call it when you name a chain of commands to execute later?");
checkAnswer(A2, "C2");
let A3 = prompt("what does 'git init' do?");
checkAnswer(A3, "C8");
let A4 = prompt("What do you call a named storage that can hold data for use in a program?");
checkAnswer(A4, "C1");
let A5 = prompt("what does an if statement check?");
checkAnswer(A5, "C4");
let A6 = prompt("what does 'git remote do'?");
checkAnswer(A6, "C7");
let A7 = prompt("what are the commands 'for' and 'while' used for?");
checkAnswer(A7, "C3");
let A8 = prompt("what does 'git commit' do?");
checkAnswer(A8, "C6");

alert("you got " + score + " out of 8 correct!");