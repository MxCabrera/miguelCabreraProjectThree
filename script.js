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
    const question = question[index];
    const choice1Total = question[index].answer1Total;
    const choice2Total = question[index].answer2Total;

    questionMain.innerHTML = `${question[index]} : ${question.question}`
}


//.. move on to the next question when next button clicked
function nextQuestion(){

}

// when clicking next, gather value of the selected choice. 


// add answer to total score


//move on to the next question 


// reseting the quiz if user requests

// onclick event listeners

