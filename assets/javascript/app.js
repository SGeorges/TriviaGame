var question = {
    question: "",
    options: [],
    answer: 0,
    result: "",
    gif: "",
};

var question1 = Object.assign({}, question);
    question1.question = "Who put Hermionie under the imperius curse?";
    question1.options = ["Harry Potter", "Severus Snape", "Ron Wesley", "Albus Dumbledor"];
    question1.answer = 2;
    question1.gif = "https://i.gifer.com/HZ6.gif";

var question2 = Object.assign({}, question);
    question2.question = "Which character in Toy Story 2 Harvey Weinstein'd Barbie dolls?";
    question2.options = ["Buzz Lightyear", "Woody", "Stinky Pete", "Mr. Potatohead"];
    question2.answer = 2;
    question2.gif = "https://media.giphy.com/media/gtZQdA9r47fMY/giphy.gif";

var question3 = Object.assign({}, question);
    question3.question = "Who has the high ground?";
    question3.options = ["Obi-wan Kenobi", "Albus Dumbldore", "Elsa", "Batman"];
    question3.answer = 0;
    question3.gif = "https://i.gifer.com/5628.gif";

var question4 = Object.assign({}, question);
    question4.question = "What's the answer to life, the universe, and everything?";
    question4.options = ["Success", "Being kind to thy neighbor", "Procreation", "42"];
    question4.answer = 3;
    question4.gif = "https://media.giphy.com/media/WDPLRcY6U0NmE/giphy.gif";

var question5 = Object.assign({}, question);
    question5.question = "Who is Al Gore's greatest nemesis?";
    question5.options = ["Manbearpig", "George Bush", "Florida", "Global Warming"];
    question5.answer = 0;
    question5.gif = "https://media.giphy.com/media/26ufijMR5obiuLrnq/giphy.gif";

var question6 = Object.assign({}, question);
    question6.question = "What is the best chicken nugget dipping sauce?";
    question6.options = ["Chickfila", "Barbecue", "Ketchup", "Mulan SzeChuan Teriyaki"];
    question6.answer = 3;
    question6.gif = "https://steamuserimages-a.akamaihd.net/ugc/92729662218781825/8F0E0E1712C8EA2A485A43C7199B1D5ADAF22BA4/";

var question7 = Object.assign({}, question);
    question7.question = "What does a Lannister do when they have no money to repay their debts?";
    question7.options = ["Invade another house for money", "Kill the people they owe money", "A Lannister always pays their debts", "Nothing"];
    question7.answer = 3;
    question7.gif = "https://media.giphy.com/media/SYcagdvsZ1PDW/giphy.gif";



var questions = [question1, question2, question3, question4, question5, question6, question7];

var intervalId;
var timeQuestion = 25;
var timeResult = 4;
var correct = 0;
var count = 0;


$("#start").on("click", startTriviaGame);

var time = timeQuestion;

function startTriviaGame() {
    console.log("----- startTriviaGame running -----");

    displayQuestion();
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    console.log("----- decrement running -----");

    time--;
    if (time < 10 ) {
        $("#timer-display").html("<h2 id='timer-text'> Time Remaining : 0" + time + " seconds</h2>");
    }
    else {
        $("#timer-display").html("<h2 id='timer-text'> Time Remaining : " + time + " seconds</h2>");
    }

    if (time === 0) {

        stop();
        $("#timer-display").html("<h2 id='timer-text'> TIMES UP! </h2>");
        checkAnswer();
    }
}

function stop () {
    console.log("----- stop running -----");

    clearInterval(intervalId);
}

function displayQuestion() {
    console.log("----- displayQuestion running -----");
    console.log(questions[count]);

    $("#timer-display").html("<h2 id='timer-text'> Time Remaining : " + time + " seconds</h2>");
    $("#image-holder").empty();
    $("#image-holder").append("<h2 class = 'question-text'>" + questions[count].question + "</h2>");

    for (var i = 0; i < questions[count].options.length; i++) {
        switch (i) {
            case 0: 
                $("#image-holder").append("<p id='option-text' class= 'option-1' value = '0'>1: " + questions[count].options[i] + "</p>");
            break;

            case 1: 
                $("#image-holder").append("<p id='option-text' class= 'option-2' value = '1'>2: " + questions[count].options[i] + "</p>");
            break;

            case 2: 
                $("#image-holder").append("<p id='option-text' class= 'option-3' value = '2'>3: " + questions[count].options[i] + "</p>");
            break;

            case 3: 
                $("#image-holder").append("<p id='option-text' class= 'option-1' value = '3'>4: " + questions[count].options[i] + "</p>");
            break;

            default:
            break;

        }
    }

}

function checkAnswer( selected ) {
    console.log("----- checkAnswer running -----");

    time = timeResult;

    $("#image-holder").empty();
    console.log(selected);

    if (parseInt($(selected).attr("value")) === questions[count].answer) {
        $("#image-holder").append("<p> CORRECT! - the answer was " + questions[count].options[questions[count].answer] + "</p>");
        questions[count].result = "CORRECT";
    }
    else {
        $("#image-holder").append("<p> WRONG! - the answer was " + questions[count].options[questions[count].answer] + '</p>');
        questions[count].result = "WRONG"
    }

    $("#image-holder").append("<img id= 'gif' src='" + questions[count].gif + "'>");
    
    stop();
    intervalId = setInterval(answerPrompt, 1000);
}

function answerPrompt () {
    console.log("----- answerPrompt running -----");

    time--;

    if (time === 0) {
        time = timeQuestion;
        count++;

        if (count === questions.length) {
            finalPrompt();
            stop();

        }
        else {
            displayQuestion();
            stop();
            intervalId = setInterval(decrement, 1000);        
        }

    }

}

function finalPrompt () {

    
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].result === "CORRECT") {
            correct++;
        }
    }
    $("#image-holder").empty();
    $("#image-holder").append("<p>That's all the questions I've got! </p>");
    $("#image-holder").append("<p> Result : " + correct + " out of " + questions.length)
    $("#image-holder").append("<button id='reset'>Retake Quiz</button>");
}

$(document).on("click", "#option-text", function() {
    stop();
    checkAnswer( this );
});

$(document).on("click", "#reset", function() {
    time = timeQuestion; 
    count = 0;
    correct = 0;

    $("#image-holder").empty();
    startTriviaGame();
});



