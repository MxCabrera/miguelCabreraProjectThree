// questions in an array 
const questions = [
    {
        "question": "What is your favourite shoes?",
        "answer1": "Nike",
        "answer1Total": "1",
        "answer2": "Converse",
        "answer2Total": "3",
        "answer3": "Air Jordan",
        "answer3Total": "2",
        "answer4": "Adidas",
        "answer4Total": "4"
    }, {
        "question": "Choose one food to eat for a year?",
        "answer1": "Fish",
        "answer1Total": "3",
        "answer2": "Steak",
        "answer2Total": "2",
        "answer3": "Tacos",
        "answer3Total": "1",
        "answer4": "Shrimp",
        "answer4Total": "4"
    }, {
        "question": "Pick a color",
        "answer1": "Royal Silver",
        "answer1Total": "4",
        "answer2": "Crimson Red",
        "answer2Total": "2",
        "answer3": "Yellow Gold",
        "answer3Total": "3",
        "answer4": "Cobalt Blue",
        "answer4Total": "1",
    }, {
        "question": "Ten seconds on the clock! What are you doing?",
        "answer1": "Shooting the game-winning shot",
        "answer1Total": "2",
        "answer2": "Power through for a backboard shot",
        "answer2Total": "4",
        "answer3": "Dunking the game-winning play",
        "answer3Total": "1",
        "answer4": "Passing an alley-oop to win the game ",
        "answer4Total": "3"
    }, {
        "question": "You just got the game winning shot! How do you celebrate?",
        "answer1": "Raised fist running down the court",
        "answer1Total": "3",
        "answer2": "Beating your chest angrily",
        "answer2Total": "1",
        "answer3": "Sticking your tongue out to crowd",
        "answer3Total": "2",
        "answer4": "Remaining silent, being humble",
        "answer4Total": "4"
    }
    , {
        "question": "It's your day off! What do you like to do?",
        "answer1": "Play relaxing sports",
        "answer1Total": "2",
        "answer2": "Workout and exercise",
        "answer2Total": "1",
        "answer3": "Watch television",
        "answer3Total": "3",
        "answer4": "Enjoy board Games",
        "answer4Total": "4"
    }, {
        "question": "Pick A State",
        "answer1": "Ohio",
        "answer1Total": "1",
        "answer2": "Texas",
        "answer2Total": "4",
        "answer3": "California",
        "answer3Total": "3",
        "answer4": "Illinois",
        "answer4Total": "2"
    }, {
        "question": "What are you afraid of?",
        "answer1": "Failure",
        "answer1Total": "1",
        "answer2": "Water",
        "answer2Total": "2",
        "answer3": "Heights",
        "answer3Total": "4",
        "answer4": "Bacteria",
        "answer4Total": "3"
    }
];



// - creating a empty playerInfo object -

const playerInfo = {};

// - storing the empty playerInfo with new objects - 

playerInfo.james = {
    name: 'LeBron James',
    image: './assets/leBronJames.jpg',
    awards: `3x NBA Champion | 16x AllStar | 4x MVP | 3x Finals MVP | 1x Scoring Champ | 6x All-Defense Award`,
    info: 'You are known for your high IQ in your field of work, utilizing your strength and extraordinary drive to break through any barriers that may come your way. You are prone to bumps and bruises along the journey, but you never give up and plan to be the best and most successful in the long run!',
    mixtape: `https://www.youtube.com/watch?v=3zRqsy08YfM`,
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
    awards: `6x NBA Champion | 14x AllStar | 5x MVP | 6x Finals MVP | 10x Scoring Champ | 11x Defensive 1st Team`,
    info: 'You are a born winner. One of the fiercest competitors with an intimidating demeanor. Your tenacious attitude, will-power, and consistent hard work breeds success at an incredibly high rate. Failure is not in your vocabulary. Your name will be known, and people will be inspired to follow your path.',
    mixtape: `https://www.youtube.com/watch?v=8FwgVZdCpGk&t=28s`,
    stats: {
        points: 30.1,
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
    awards: `5x NBA Champion | 12x AllStar | 3x MVP | 2x Steal Champ | 3x Finals MVP | 4x Assist Champ`,
    info: `You are a born leader. What you bring to the table in any circumstance is considered "magical". Your winning attitude helps bring out the strength in everyone around you, which imminently leads to your teams success. You do not let anything or anyone stand in the way once you are committed to a goal.`,
    mixtape: `https://www.youtube.com/watch?v=M97-QrqHBw8&list=TLPQMDkwNDIwMjB_kU42FBZUtQ&index=2`,
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
    info: `You are considered a humble, silent killer. You do what it takes to get success in the most fundamental way. Being known for doings things the right way, without the need to be captured in the spotlight. You get the job done and your consistent success will inspire others overtime. Due to your hardwork, you will be an icon in what you decide to pursue.`,
    mixtape: `https://www.youtube.com/watch?v=OL1sORY3Kh4`,
    stats: {
        points: 19.0,
        rebounds: 10.8,
        assists: 3.0,
        steals: 0.7,
        blocks: 2.2,
        fieldGoal: 50
    }
};



// - scores & data - 

let score = [];
let mainQuestion = 0;
const totalQuestions = questions.length;

// - connecting javascript to the html DOM elements, stored in variables - 
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



//  - connecting audio variables - 
const lbj = document.querySelector('.lebron');
const mj = document.querySelector('.jordan');
const tim = document.querySelector('.tim');
const earvin = document.querySelector('.earvin');
const themeSong = new Audio("./assets/audio/themeSong.mp3");
const endSong = new Audio("./assets/audio/results.mp3");

// - play the audio with these functions - 
function playTheme() {
    themeSong.play();
};
function stopTheme() {
    themeSong.pause();
};

// - function to store several audio files into a function, waiting for call  - 
function playVoice1() {
    audio = new Audio('./assets/audio/lebronV.mp3');
    audio.play();
};
function playVoice2() {
    audio = new Audio('./assets/audio/bestPlayer.mp3');
    audio.play();
};
function playVoice3() {
    audio = new Audio('./assets/audio/earvinV5.mp3');
    audio.play();
};
function playVoice4() {
    audio = new Audio('./assets/audio/timV.mp3');
    audio.play();
};

// - when user clicks button, make a sound effects -
function playAudio() {
    let audio;
    // - if user is not at the end of quiz, play buckets audio - 
    if (mainQuestion !== totalQuestions) {
        audio = new Audio("./assets/audio/bucket.mp3");
        audio.play();
        // if user is completed all questions, play congrats audio - 
    } else if (mainQuestion == totalQuestions) {
        audio = new Audio("./assets/audio/congrats.mp3");
        audio.play();
        // - stop theme song audio -
        stopTheme();
        // - play end song audio - 
        endSong.play();
    };
};



// - function for when user clicks the start quiz button: hide header, display quizBox, populate questions/answer to DOM, play theme song - 
function beginQuiz() {
    if (startQuiz) {
        header.style.display = 'none';
        quiz.style.display = 'block';
        createQuestions(mainQuestion);
        playTheme();
    }
};




// - function that stores the question/answers variables according to index parameter, then populating the information requested to the DOM elements connected -
function createQuestions(index) {
    const question = questions[index];
    const choice1Total = questions[index].answer1Total;
    const choice2Total = questions[index].answer2Total;
    const choice3Total = questions[index].answer3Total;
    const choice4Total = questions[index].answer4Total;

    // - populating questions from array into DOM - 
    questionMain.innerHTML = `${index + 1}. ${question.question}`;

    // - adding data-total attributes to the choiceTotals for value storage - 
    choice1.setAttribute('data-total', `${choice1Total}`);
    choice2.setAttribute('data-total', `${choice2Total}`);
    choice3.setAttribute('data-total', `${choice3Total}`);
    choice4.setAttribute('data-total', `${choice4Total}`);

    // - populating answers from question array into DOM -
    choice1.innerHTML = `${question.answer1}`;
    choice2.innerHTML = `${question.answer2}`;
    choice3.innerHTML = `${question.answer3}`;
    choice4.innerHTML = `${question.answer4}`;
}





// - when user clicks the next button, do this: - 
function nextQuestion() {
    // - set user choice variable to input element that the user clicked on - 
    let userChoice = document.querySelector('input[type="radio"]:checked');
    // - if there are no input radio tag checked, alert user with prompt - 
    if (!userChoice) {
        alert(`If you dont answer, you will be benched!`);
        return;
    }
    // - store a number thats based on the users choices, using the total data stored in its attributes - 
    const answerScore = Number(userChoice.nextElementSibling.getAttribute('data-total'));
    // - add the answerScore variable to the score array created above - 
    score.push(answerScore);
    // - store the amount that score array currently has - 
    const finalScore = score.reduce((total, currentNum) => total + currentNum);
    // - add 1 to current mainQuestion amount -
    mainQuestion++
    // - specify whether the radio buttons should be checked or not - 
    userChoice.checked = false;
    // - if main question is not == to total questions, play the audio function  -
    if (mainQuestion !== totalQuestions) {
        playAudio()
    }
    // - if main question is equal to the 2nd last question, change text in DOM -
    if (mainQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    // - when mainQuestion = totalQuestions - 
    if (mainQuestion == totalQuestions) {
        // - hide the quizBox in the DOM -
        quiz.style.display = 'none';
        //  - create empty variables - 
        let pName;
        let pImage;
        let pImageClass;
        let pAwards;
        let pInfo;
        let pStats;
        let pMixtape;
        // - if finalScore is equal to a specific number range below, use information corresponding to the number and store it into empty variables above - 
        if (finalScore >= 8 && finalScore <= 14) {
            pName = playerInfo.james.name;
            pImage = playerInfo.james.image;
            pAwards = playerInfo.james.awards;
            pInfo = playerInfo.james.info
            pStats = `Points: ${playerInfo.james.stats.points} | Rebounds: ${playerInfo.james.stats.rebounds} | Assists: ${playerInfo.james.stats.assists} | Steals: ${playerInfo.james.stats.steals} | Blocks: ${playerInfo.james.stats.blocks} | Field Goal: ${playerInfo.james.stats.fieldGoal}%`
            pMixtape = playerInfo.james.mixtape
        } else if (finalScore >= 15 && finalScore <= 20) {
            pName = playerInfo.jordan.name;
            pImage = playerInfo.jordan.image;
            pAwards = playerInfo.jordan.awards;
            pInfo = playerInfo.jordan.info;
            pStats = `Points: ${playerInfo.jordan.stats.points} | Rebounds: ${playerInfo.jordan.stats.rebounds} | Assists: ${playerInfo.jordan.stats.assists} | Steals: ${playerInfo.jordan.stats.steals} | Blocks: ${playerInfo.jordan.stats.blocks} | Field Goal: ${playerInfo.jordan.stats.fieldGoal}%`
            pMixtape = playerInfo.jordan.mixtape
        } else if (finalScore >= 21 && finalScore <= 26) {
            pName = playerInfo.magic.name;
            pImage = playerInfo.magic.image;
            pAwards = playerInfo.magic.awards;
            pInfo = playerInfo.magic.info;
            pStats = `Points: ${playerInfo.magic.stats.points} | Rebounds: ${playerInfo.magic.stats.rebounds} | Assists: ${playerInfo.magic.stats.assists} | Steals: ${playerInfo.magic.stats.steals} | Blocks: ${playerInfo.magic.stats.blocks} | Field Goal: ${playerInfo.magic.stats.fieldGoal}%`
            pMixtape = playerInfo.magic.mixtape
        } else if (finalScore >= 27 && finalScore <= 32) {
            pName = playerInfo.duncan.name;
            pImage = playerInfo.duncan.image;
            pImageClass = playerInfo.duncan.class;
            pAwards = playerInfo.duncan.awards;
            pInfo = playerInfo.duncan.info;
            pStats = `Points: ${playerInfo.duncan.stats.points} | Rebounds: ${playerInfo.duncan.stats.rebounds} | Assists: ${playerInfo.duncan.stats.assists} | Steals: ${playerInfo.duncan.stats.steals} | Blocks: ${playerInfo.duncan.stats.blocks} | Field Goal: ${playerInfo.duncan.stats.fieldGoal}%`
            pMixtape = playerInfo.duncan.mixtape
        }

        // - when information is stored into variables in the scope, display results to the DOM - 
        results.innerHTML = `
            <h1> Your Score: ${finalScore}</h1>
            <div class="resultBox">
                <a href="${pMixtape}"><img class="${pImageClass}" src="${pImage}"></a>
                <h2>You are ${pName}!</h2>
                <p class="statsInfo">${pAwards}</p>
                <p class="highlight">${pInfo}</p>
                <h3>Career Statistics: (Per Game Average)</h3>
                <p class="statsInfo">${pStats}</p>
                <span class="youtube">*click the photo for ${pName} highlights!* </span>   <a class="portfolio" href="http://mcabrera.ca">| MyPortfolio</a>
            </div>
            <button class="restart"> Restart </button>`
        // - when results have been displayed, play audio function - 
        playAudio();
    }
    // - when user clicks next question, call the createQuestions function that uses mainQuestion variable as the current number - 
    createQuestions(mainQuestion);
}





// - when user clicks on reset button: reduce mainQuestion to 0, empty score array, and reload window - 
function resetQuiz(e) {
    if (e.target.matches('button')) {
        mainQuestion = 0;
        score = [];

        location.reload();
    }
}





// - when user click on previous button, subtract mainQuestion amount by 1, remove the last score amount, call create questions function to populate the previous questions onto DOM - 
function previousQuestion() {
    mainQuestion--;
    score.pop()
    createQuestions(mainQuestion);
}




// - onclick event listeners for when user utlizes the quiz buttons - 
results.addEventListener('click', resetQuiz);
previousButton.addEventListener('click', previousQuestion);
nextButton.addEventListener('click', nextQuestion);
startQuiz.addEventListener('click', beginQuiz);

// - audio event listeners when user clicks header images - 
lbj.addEventListener('click', playVoice1);
mj.addEventListener('click', playVoice2);
tim.addEventListener('click', playVoice4);
earvin.addEventListener('click', playVoice3);