

// questions in an array 
const questions = [
    {
        "question": "What is your favourite food?",
        "answer1": "Tacos",
        "answer1Total": "1",
        "answer2": "Steak",
        "answer2Total": "2"
    }, {
        "question": "What is your favourite shoes?",
        "answer1": "Nike",
        "answer1Total": "1",
        "answer2": "Air Jordans",
        "answer2Total": "2"
    }, {
        "question": "What is your favourite color?",
        "answer1": "Navy Blue",
        "answer1Total": "1",
        "answer2": "Deep Red",
        "answer2Total": "2"
    }, {
        "question": "10 seconds on the clock, what are you doing?",
        "answer1": "Making the Game Winning Play",
        "answer1Total": "1",
        "answer2": "Shooting the Game Winning shot",
        "answer2Total": "2"
    }, {
        "question": "You just got the game winning shot, how do you celebrate?",
        "answer1": "Beat your chest",
        "answer1Total": "1",
        "answer2": "Stick your tongue out",
        "answer2Total": "2"
    }
];
// console.log(questions.answer1)

let score = [];
let mainQuestion = 0;
let chosenAnswersInfo = [];
const totalQuestions = questions.length;

// ..connection the html elements to script
const header = document.querySelector('header');
const startQuiz = document.getElementById('titleButton');
const quiz = document.querySelector('.quizWrapper');
const quizBox = document.querySelector('.quizBox');
const questionMain = document.querySelector('.question');
const choice1 = document.querySelector('.choice1');
const choice2 = document.querySelector('.choice2');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const results = document.querySelector('.results');
console.log(results);

// when user clicks the start quiz button
function beginQuiz() {
    if (startQuiz) {
        header.style.display = 'none';
        quiz.style.display = 'block';
    }
}


//.. create a question when user enters the DOM
function createQuestions(index){
    const question = questions[index];
    const choice1Total = questions[index].answer1Total;
    const choice2Total = questions[index].answer2Total;

    questionMain.innerHTML = `${index + 1}. ${question.question}`
    
    choice1.setAttribute('data-total', `${choice1Total}`);
    choice2.setAttribute('data-total', `${choice2Total}`);

    choice1.innerHTML = `${question.answer1}`
    choice2.innerHTML = `${question.answer2}`

    // use the value of answer.......
}

//.. move on to the next question when next button clicked
function nextQuestion(){
    let userChoice = document.querySelector('input[type="radio"]:checked');
    
    if (!userChoice) {
        alert(`If you dont answer, you will be benched!`);
        return;
    }

    // i dont get how nextElementSibling works like that? shouldnt userChoice just be fine?
    const answerScore = Number(userChoice.nextElementSibling.getAttribute('data-total'));

    score.push(answerScore);
    chosenAnswersInfo.push()

    const finalScore = score.reduce((total, currentNum) => total + currentNum);

    mainQuestion++

    userChoice.checked = false;

    if (mainQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }


    if (mainQuestion == totalQuestions) {
        // header.style.display = 'block';
        quiz.style.display = 'none';

        // const pName = null;
        // const pImage = null ;
        // const pInfo = null;
        // if (finalScore >= 5 && finalScore <= 7) {
        //     pName = `Michael Jordan`;
        //     pImage = `<img src="./assets/michaelJordan.jpg" alt="michael jordan">`;
        //     pInfo = `6x NBA Champion`
        // } else if (finalScore >= 8 && finalScore <= 10) {
        //     pName = `LeBron James`;
        //     pImage = `<img src="./assets/leBronJames.jpg" alt="lebron james">`;
        //     pInfo = `3x NBA Champion`
        //     // return;
        // }

        // results.innerHTML = `
        // <div class="resultBox">
        // ${image}
        // <h1>You are ${name}!</h1>
        // <p>${info}</p>
        // </div>
        // <button class="restart"> Restart </button>
        // `;



        if (finalScore >= 5 && finalScore <= 7) {
            results.innerHTML = `
            <h1> Your Score: ${finalScore}</h1>
            <div class="resultBox">
            <img src="./assets/leBronJames.jpg" alt="">
            <h2>You are Lebron James!</h2>
            <p>3x NBA Champion</p>
            </div>
            <button class="restart"> Restart </button>`
        } else if (finalScore >= 8 && finalScore <= 10) {
            results.innerHTML = `
            <h1> Your Score: ${finalScore}</h1>
            <div class="resultBox">
            <img src="./assets/michaelJordan.jpg" alt="">
            <h2>You are Michael Jordan!</h2>
            <p>6x NBA Champion</p>
            </div>
            <button class="restart"> Restart </button>`
        }

        //another if statement for multiple choices.
    }

createQuestions(mainQuestion);
}

// when clicking next, gather value of the selected choice. 


// add answer to total score


// reseting the quiz if user requests
function resetQuiz(e){
    if (e.target.matches('button')){
        mainQuestion = 0;
        score = [];

        location.reload();
    }
}




// onclick event listeners
createQuestions(mainQuestion);
results.addEventListener('click', resetQuiz);
nextButton.addEventListener('click', nextQuestion)
startQuiz.addEventListener('click', beginQuiz)

// console.log(`it works!`);
