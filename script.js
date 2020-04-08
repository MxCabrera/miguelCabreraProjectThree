

// questions in an array 
const playerInfo = {};
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
    }//, {
    //     "question": "What is your favourite color?",
    //     "answer1": "Navy Blue",
    //     "answer1Total": "1",
    //     "answer2": "Deep Red",
    //     "answer2Total": "2",
    //     "answer3": "Yellow",
    //     "answer3Total": "3",
    //     "answer4": "Grey",
    //     "answer4Total": "4"
    // }, {
    //     "question": "Ten seconds on the clock, what are you doing?",
    //     "answer1": "Making the Game Winning Play",
    //     "answer1Total": "1",
    //     "answer2": "Shooting the Game Winning shot",
    //     "answer2Total": "2",
    //     "answer3": "Passing an alley-oop to win the game ",
    //     "answer3Total": "3",
    //     "answer4": "Dribbling ball for easy backboard shot",
    //     "answer4Total": "4"
    // }, {
    //     "question": "You just got the game winning shot, how do you celebrate?",
    //     "answer1": "Beat your chest, angrily",
    //     "answer1Total": "1",
    //     "answer2": "Stick your tongue out, with emphasis",
    //     "answer2Total": "2",
    //     "answer3": "Raising a hand up, running down the court",
    //     "answer3Total": "3",
    //     "answer4": "Remain silent, being humble",
    //     "answer4Total": "4"
    // }
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
    //     "answer4": "Heights",
    //     "answer4Total": "4"
    // }
];



    playerInfo.james = {
        name: 'LeBron James',
        image: './assets/leBronJames.jpg',
        class: 'lebronJ',
        awards: `6x NBA Champion | 14x AllStar | 5x MVP | Rookie of the Year | 6x Finals MVP | 10x Scoring Champ | 3x Steals Champ | 11x Defensive 1st Team`,
        info: 'You are known for your high IQ in your field of work, utilizing your strength and extraordinary drive to break through any barriers that may come your way. You are prone to bumps and bruises along the journey, but you never give up and plan to be the best and most successful in the long run!',
        stats: {
            points: 27.4,
            rebounds: 7.4,
            assists: 7.4,
            steals: 0.7,
            blocks: 0.8,
            fieldGoal: 50
        }
    };

    playerInfo.jordan = {
        name: 'Michael Jordan',
        image: './assets/michaelJordan.jpg',
        class: 'mJordan',
        awards: `6x NBA Champion | 14x AllStar | 5x MVP | Rookie of the Year | 6x Finals MVP | 10x Scoring Champ | 3x Steals Champ | 11x Defensive 1st Team`,
        info: 'You are a born winner. One of the fiercest competitors with an intimidating demeanor. Your tenacious attitude, will-power, and consistent hard work breeds success at an incredibly high rate. Failure is not in your vocabulary. Your name will be known, and people will be inspired to follow your path.',
        stats: {
            points: 30.0,
            rebounds: 6.2,
            assists: 5.3,
            steals: 2.3,
            blocks: 0.8,
            fieldGoal: 49
        }
    };

    playerInfo.magic = {
        name: 'Magic Johnson',
        image: './assets/magicJohnson2.jpeg',
        class: 'magic',
        awards: `5x NBA Champion | 12x AllStar | 3x MVP | 2x Steal Champ | 3x Finals MVP | 4x Assist Champ`,
        info: `You are a born leader. What you bring to the table in any circumstance is considered "magical". Your winning attitude helps bring out the strength in the people around you, which imminently leads to your teams success. You do not let anything or anyone stand in the way once you are committed to a goal.`,
        stats: {
            points: 19.5,
            rebounds: 7.2,
            assists: 11.2,
            steals: 0.8,
            blocks: 0.4,
            fieldGoal: 52
        }
    };

    playerInfo.duncan = {
        name: 'Tim Duncan',
        image: './assets/timDuncan.jpg',
        class: 'timothy',
        awards: `5x NBA Champion | 15x AllStar | 2x MVP | Rookie of the Year | 3x Finals MVP`,
        info: `You are humble, a silent killer, and you do what it takes to get success in the most fundamental way. Considered a genius; you do things the right way, without the need to be captured in the spotlight. You get the job done and your consistent success inspires others overtime. Due to your hardwork, you are an icon in what you decide to pursue.`,
        stats: {
            points: 19.0,
            rebounds: 10.8,
            assists: 3.0,
            steals: 0.7,
            blocks: 2.2,
            fieldGoal: 50
        }
    };



// const gifs = [
//     {
//         link: 'https://media.giphy.com/media/dH16CNQJRwPsY/giphy.gif',
//         tag: 'jordan',
//     },
//     {
//         link: 'https://media.giphy.com/media/XkJlbLt9fbDBS/giphy.gif',
//         tag: 'lebron',
//     },
//     {
//         link: 'https://media.giphy.com/media/gcXcSRYZ9cGWY/giphy.gif',
//         tag: 'magic',
//     },
//     {
//         link: 'https://media.giphy.com/media/gcXcSRYZ9cGWY/giphy.gif',
//         tag: 'timmy',
//     }];
// console.log(`the user selection is ${selection}`);
// Get value from weather object based on user selection
// const dailyWeather = weather[selection];
// const lowerWeather = dailyWeather.toLowerCase()
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
};


//.. create a question when user enters the DOM
function createQuestions(index){
    const question = questions[index];
    const choice1Total = questions[index].answer1Total;
    const choice2Total = questions[index].answer2Total;
    const choice3Total = questions[index].answer3Total;
    const choice4Total = questions[index].answer4Total;

    questionMain.innerHTML = `${index + 1}. ${question.question}`;
    
    choice1.setAttribute('data-total', `${choice1Total}`);
    choice2.setAttribute('data-total', `${choice2Total}`);
    choice3.setAttribute('data-total', `${choice3Total}`);
    choice4.setAttribute('data-total', `${choice4Total}`);

    choice1.innerHTML = `${question.answer1}`;
    choice2.innerHTML = `${question.answer2}`;
    choice3.innerHTML = `${question.answer3}`;
    choice4.innerHTML = `${question.answer4}`;

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


        let pName = '';
        let pImage = '';
        let pImageClass = '';
        let pAwards = '';
        let pInfo = '';
        let pStats = '';
        //another if statement for multiple choices corresponding to total score
        if (finalScore >= 2 && finalScore <= 3) {
            pName = `${playerInfo.james.name}`;
            pImage = `${playerInfo.james.image}`;
            pImageClass = `${playerInfo.james.class}`;
            pAwards = `${playerInfo.james.awards}`;
            pInfo = `${playerInfo.james.info}`;
            pStats = `Points: ${playerInfo.james.stats.points} | Rebounds: ${playerInfo.james.stats.rebounds} | Assists: ${playerInfo.james.stats.assists} | Steals: ${playerInfo.james.stats.steals} | Blocks: ${playerInfo.james.stats.blocks} | Field Goal: ${playerInfo.james.stats.fieldGoal}%`

        } else if (finalScore >= 4 && finalScore <= 5) {
            pName = `${playerInfo.jordan.name}`;
            pImage = `${playerInfo.jordan.image}`;
            pImageClass = `${playerInfo.jordan.class}`;
            pAwards = `${playerInfo.jordan.awards}`;
            pInfo = `${playerInfo.jordan.info}`;
            pStats = `Points: ${playerInfo.jordan.stats.points} | Rebounds: ${playerInfo.jordan.stats.rebounds} | Assists: ${playerInfo.jordan.stats.assists} | Steals: ${playerInfo.jordan.stats.steals} | Blocks: ${playerInfo.jordan.stats.blocks} | Field Goal: ${playerInfo.jordan.stats.fieldGoal}%`

        } else if (finalScore >= 6 && finalScore <= 7){
            pName = `${playerInfo.magic.name}`;
            pImage = `${playerInfo.magic.image}`;
            pImageClass = `${playerInfo.magic.class}`;
            pAwards = `${playerInfo.magic.awards}`;
            pInfo = `${playerInfo.magic.info}`;
            pStats = `Points: ${playerInfo.magic.stats.points} | Rebounds: ${playerInfo.magic.stats.rebounds} | Assists: ${playerInfo.magic.stats.assists} | Steals: ${playerInfo.magic.stats.steals} | Blocks: ${playerInfo.magic.stats.blocks} | Field Goal: ${playerInfo.magic.stats.fieldGoal}%`

        } else if (finalScore >= 8 && finalScore <= 9) {
            pName = `${playerInfo.duncan.name}`;
            pImage = `${playerInfo.duncan.image}`;
            pImageClass = `${playerInfo.duncan.class}`;
            pAwards = `${playerInfo.duncan.awards}`;
            pInfo = `${playerInfo.duncan.info}`;
            pStats = `Points: ${playerInfo.duncan.stats.points} | Rebounds: ${playerInfo.duncan.stats.rebounds} | Assists: ${playerInfo.duncan.stats.assists} | Steals: ${playerInfo.duncan.stats.steals} | Blocks: ${playerInfo.duncan.stats.blocks} | Field Goal: ${playerInfo.duncan.stats.fieldGoal}%`
        }

        // displaying results to the DOM.
        results.innerHTML = `
            <h1> Your Score: ${finalScore}</h1>
            <div class="resultBox">
            <img class="${pImageClass}" src="${pImage}">
            <h2>You are ${pName}!</h2>
            <p class="highlight">${pAwards}</p>
            <p>${pInfo}</p>
            <h3>Career Statistics: (Per Game Average)</h3>
            <p class="highlight">${pStats}</p>
            </div>
            <button class="restart"> Restart </button>`
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
// $('results').on('click', function (event) {
// const results = document.querySelectocr('.results');
results.addEventListener('click', resetQuiz);
previousButton.addEventListener('click', previousQuestion);
nextButton.addEventListener('click', nextQuestion);
startQuiz.addEventListener('click', beginQuiz);
createQuestions(mainQuestion);

// console.log(`it works!`);