console.log(`it works!`);



// questions in an array 
const questions = [
    {
        question: 'What is your favourite food?',
        answer1: 'Tacos',
        answer1Total: '1',
        answer2: 'Steak',
        answer2Total: '2'
    }
];
// console.log(questions.answer1)

let score = [];
let mainQuestion = 0;
let michaelJordan = 0;
let leBronJames = 0;
let chosenAnswerData = []
const totalQuestions = questions.length // array?? 

// ..connection the html elements to script
const quizBox = document.querySelector('.quizBox');
// console.log(quizBox)
const questionMain = document.querySelector('.question');
// console.log(questionMain);
const choice1 = document.querySelector('.choice1');
// console.log(choice1);
const choice2 = document.querySelector('.choice2');
// console.log(choice2);
const nextButton = document.querySelector('.next');
// console.log(nextButton);
const previousButton = document.querySelector('.previous');
// console.log(previousButton);

//.. create a question when user enters the DOM
function createQuestions(index){

}


//.. move on to the next question when next button clicked
function nextQuestion(){

}

// when clicking next, gather value of the selected choice. 


// add answer to total score


//move on to the next question 


// reseting the quiz if user requests

// onclick event listeners



// A landing page with the app heading "Which G.O.A.T. Are You? (Greatest of all time)" and a button that states "click to start"

// A button that directs them to the start of the quiz. 

// Listen to that button click event to scroll to the quiz form section

// A radio form that gives you two options to decide from.

// When radio selection has been checks, click the next button

// Listen to the button click event to move on to the next question below.

// When all of the questions have been answered, click the finish button. 

// Listen to the button click event to complete the quiz

// gather the values of each selected choice from each question and create a total amount.

// store the total amount in a variable

// When quiz is completed return total value score 

// If score is equal to option A, return option A information to DOM, else if total score is equal to option B, return option B information to DOM.

// if no choice has been selected, alert user to choose one.

// Listen to button click event, Once results have been returned to the user, display restart button to reset the quiz.
