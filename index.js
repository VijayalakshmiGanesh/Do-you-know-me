var readlineSync = require("readline-sync");

var name=readlineSync.question("Take this quiz by entering your name: ")
console.log("Get ready........ "+name)
console.log("-----------------------------------------")

var quiz=[{question: "Which is Viji's favorite dessert: a)PanCakes b)Ice-cream c)Waffles ", answer:"Waffles"},
          {question: "Which is Viji's favorite movie/series genre: a)Mystery b)Romance c)Neither ", answer:"Mystery"},
          {question: "What does Viji do in her free time: a)Coding b)Sleeping c)Both ", answer:"Both"},
          {question: "True or False:\"Viji is an introvert\" ", answer:"False"},
           {question: "Is viji an animal lover: a)Yes b)No ", answer:"No"}
         ]

function game() {
  for (var i=0; i<quiz.length; i++) {
    var question = quiz[i];
    
    check(question.question, question.answer)
  }
}

var count=0;
function check(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase())
  {
    count++;
    console.log("You are Correctt!!")
  } else{
    console.log("Nahhhh :(, Better luck next time")
  }
    console.log("Your current score: "+count)
    console.log("-----------------------------------------")
}

function showScores() {
  console.log("Wohooooo! Your score: ", count);

  console.log("Hope you enjoyed!! See ya")
}

game();
showScores();