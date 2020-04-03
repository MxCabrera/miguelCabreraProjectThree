

// questions in an array 
const questions = [
    {
        "question": "What is your favourite food?",
        "answer1": "Tacos",
        "answer1Total": "1",
        "answer2": "Steak",
        "answer2Total": "2",
        "answer3": "Fish",
        "answer3Total": "3",
        "answer4": "Shrimp",
        "answer4Total": "4"
    }, {
        "question": "What is your favourite shoes?",
        "answer1": "Nike",
        "answer1Total": "1",
        "answer2": "Air Jordans",
        "answer2Total": "2",
        "answer3": "Converse",
        "answer3Total": "3",
        "answer4": "Adidas",
        "answer4Total": "4"
    }, {
        "question": "What is your favourite color?",
        "answer1": "Navy Blue",
        "answer1Total": "1",
        "answer2": "Deep Red",
        "answer2Total": "2",
        "answer3": "Yellow",
        "answer3Total": "3",
        "answer4": "Grey",
        "answer4Total": "4"
    }, {
        "question": "10 seconds on the clock, what are you doing?",
        "answer1": "Making the Game Winning Play",
        "answer1Total": "1",
        "answer2": "Shooting the Game Winning shot",
        "answer2Total": "2",
        "answer3": "Passing an alley-oop to win the game ",
        "answer3Total": "3",
        "answer4": "Dribbling ball for easy backboard shot",
        "answer4Total": "4"
    }, {
        "question": "You just got the game winning shot, how do you celebrate?",
        "answer1": "Beat your chest, angrily",
        "answer1Total": "1",
        "answer2": "Stick your tongue out, with emphasis",
        "answer2Total": "2",
        "answer3": "Raising a hand up, running down the court",
        "answer3Total": "3",
        "answer4": "Remain silent, being humble",
        "answer4Total": "4"
    }
    //, {
    //     "question": "On your day off, what do you like to do?",
    //     "answer1": "Workout and exercise",
    //     "answer1Total": "2",
    //     "answer2": "Play relaxing sports",
    //     "answer2Total": "1",
    //     "answer3": "Watch Tv",
    //     "answer3Total": "3",
    //     "answer4": "Board Games",
    //     "answer4Total": "4"
    // }, {
    //     "question": "Pick A City",
    //     "answer1": "Cleveland",
    //     "answer1Total": "2",
    //     "answer2": "Chicago",
    //     "answer2Total": "1",
    //     "answer3": "Los Angeles",
    //     "answer3Total": "3",
    //     "answer4": "San Antonio",
    //     "answer4Total": "4"
    // }, {
    //     "question": "What are you afraid of?",
    //     "answer1": "Failure",
    //     "answer1Total": "2",
    //     "answer2": "Water",
    //     "answer2Total": "1",
    //     "answer3": "Bacteria",
    //     "answer3Total": "3",
    //     "answer4": "Sharks",
    //     "answer4Total": "4"
    // }
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
const choice3 = document.querySelector('.choice3');
const choice4 = document.querySelector('.choice4');
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
    const choice3Total = questions[index].answer3Total;
    const choice4Total = questions[index].answer4Total;

    questionMain.innerHTML = `${index + 1}. ${question.question}`
    
    choice1.setAttribute('data-total', `${choice1Total}`);
    choice2.setAttribute('data-total', `${choice2Total}`);
    choice3.setAttribute('data-total', `${choice3Total}`);
    choice4.setAttribute('data-total', `${choice4Total}`);

    choice1.innerHTML = `${question.answer1}`
    choice2.innerHTML = `${question.answer2}`
    choice3.innerHTML = `${question.answer3}`
    choice4.innerHTML = `${question.answer4}`

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



        if (finalScore >= 5 && finalScore <= 9) {
            results.innerHTML = `
            <h1> Your Score: ${finalScore}</h1>
            <div class="resultBox">
            <img src="./assets/leBronJames.jpg" alt="Lebron James">
            <h2>You are Lebron James!</h2>
            <p>3x NBA Champion</p>
            </div>
            <button class="restart"> Restart </button>`
        } else if (finalScore >= 10 && finalScore <= 13) {
            results.innerHTML = `
            <h1> Your Score: ${finalScore}</h1>
            <div class="resultBox">
            <img src="./assets/michaelJordan.jpg" alt="Michael Jordan">
            <h2>You are Michael Jordan!</h2>
            <p>6x NBA Champion</p>
            </div>
            <button class="restart"> Restart </button>`
        } else if (finalScore >= 14 && finalScore <= 16){
            results.innerHTML = `
            <h1 class="magicHeader"> Your Score: ${finalScore}</h1>
            <div class="resultBox">
            <img class="magic" src="./assets/magicJohnson2.jpeg" alt="Magic Johnson">
            <h2>You are Magic Johnson!</h2>
            <p>5x NBA Champion</p>
            </div>
            <button class="restart"> Restart </button>`
        } else if (finalScore >= 17 && finalScore <= 20) {
            results.innerHTML = `
            <h1> Your Score: ${finalScore}</h1>
            <div class="resultBox">
            <img class="timothy" src="./assets/timDuncan.jpg" alt="Tim Duncan">
            <h2>You are Tim Duncan!</h2>
            <p>5x NBA Champion</p>
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


function previousQuestion() {
    mainQuestion--;
    score.pop()
    createQuestions(mainQuestion);
}



// onclick event listeners
results.addEventListener('click', resetQuiz);
previousButton.addEventListener('click', previousQuestion);
nextButton.addEventListener('click', nextQuestion);
startQuiz.addEventListener('click', beginQuiz);
createQuestions(mainQuestion);

// console.log(`it works!`);
