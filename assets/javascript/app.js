var question = {
    question: "",
    options: [],
    answer: 0,
    result: "",
    quote: "",
    speaker: "",
    book: "",
};

var question1 = Object.assign({}, question);
    question1.question = "Hermione Granger was selected for house Gryffindor, but what would've been her second choice?";
    question1.options = ["Hufflepuff", "Slytherin", "Ravenclaw", "Gryffindor"];
    question1.answer = 2;
    question1.quote = "Do either of you know what house you'll live in? I've been asking around, and I hope I'm in Gryffindor, it sounds by far the best; I hear Dumbledore himself was in it, but I suppose Ravenclaw wouldn't be too bad...";
    question1.speaker = "Hermione Granger";
    question1.book = "Harry Potter and the Sorcerer's Stone"

var question2 = Object.assign({}, question);
    question2.question = "James Potter's animagus form was which animal?";
    question2.options = ["Bear", "Cat", "Stag", "Dog"];
    question2.answer = 2;
    question2.quote = "Yes, your father was always a stag when he transformed. You guessed right... that's why we called him Prongs.";
    question2.speaker = "Remus Lupin";
    question2.book = "Harry Potter and the Prisoner of Azkaban"

var question3 = Object.assign({}, question);
    question3.question = "The House of Black family tree identifies Sirius' relation to which character?";
    question3.options = ["Draco Malfoy ", "Albus Dumbldore", "Severus Snape", "Remus Lupin"];
    question3.answer = 0;
    question3.quote = "Harry, however, did not laugh; he was too busy staring at the names to the right of Andromeda's burn mark. A double line of gold embroidery linked Narcissa Black with Lucius Malfoy and a single vertical gold line from their names led to the name Draco.";
    question3.speaker = "Sirius Black";
    question3.book = "Harry Potter and the Order of the Phoenix"

var question4 = Object.assign({}, question);
    question4.question = "What is the reason for Hagrid's resilience to magical spells?";
    question4.options = ["His Overcoat", "His size", "His magical aura", "Giants Blood"];
    question4.answer = 3;
    question4.quote = "It'll be his giants blood. It's very hard to Stun a giant, they're like trolls, really tough...";
    question4.speaker = "Hermionie Granger";
    question4.book = "Harry Potter and the Order of the Phoenix"

var question5 = Object.assign({}, question);
    question5.question = "Who was accused of conjuring the Dark Mark with Harry Potter's wand?";
    question5.options = ["Winky", "Lucius Malfoy", "Hermione Granger", "Barty Crouch Sr."];
    question5.answer = 0;
    question5.quote = "<i>You've been caught red-handed, elf! Caught with the guilty wand in your hand!</i>";
    question5.speaker = "Amos Diggory";
    question5.book = "Harry Potter and the Goblet of Fire"

var question6 = Object.assign({}, question);
    question6.question = "How did the members of Dumbledore's Army schedule meetings?";
    question6.options = ["Recurring Date ", "Secret Notes", "Word of Mouth", "An Enchanted Galleon"];
    question6.answer = 3;
    question6.quote = "You see the numerals around the edge of the coins? On real Galleons that's just a serial number referring to the goblin who cast the coin. On these fake coins, though, the numbers will change to reflect the time and date of the next meeting.";
    question6.speaker = "Hermione Granger";
    question6.book = "Harry Potter and the Order of the Phoenix"

var question7 = Object.assign({}, question);
    question7.question = "After the death of Sirius Black, who became Kreachers' master?";
    question7.options = ["Lucius Malfoy", "Bellatrix Lestrange", "Harry Potter", "Narcissa Black"];
    question7.answer = 2;
    question7.quote = "Well that simplifies matters. It seems that Sirius knew what he was doing. You are the rightful owner of number twelve, Grimmauld Place and of Kreacher.";
    question7.speaker = "Albus Dumbledore";
    question7.book = "Harry Potter and the Half-Blood Prince"


var questions = [question1, question2, question3, question4, question5, question6, question7];

var intervalId;
var timeQuestion = 25;
var timeResult = 5;
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
        $("#game-timer").text("Time Remaining : 0" + time + " seconds");
    }
    else {
        $("#game-timer").text("Time Remaining : " + time + " seconds");
    }

    if (time === 0) {

        stop();
        $("#game-timer").text("Time's Up!");
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

    $("#game-timer").text("Time Remaining : " + time + " seconds");
    $("#game-holder").empty();

    var ques = $("<div>");
        ques.addClass("row d-flex justify-content-center");

    $(ques).append("<h5 id = 'question-text' class= 'col-md-12 text-center'>" + questions[count].question + "</h2>");

    var options = $("<ul>");
        options.addClass("list-group");
    
    for (var i = 0; i < questions[count].options.length; i++) {
        $(options).append("<li id='option-text' class= 'list-group-item w-100 text-center' value = '" + i + "'>" + (i+1) + ": " + questions[count].options[i] + "</p>");
    }

    $(ques).append(options);
    $("#game-holder").append(ques);
}

function checkAnswer( selected ) {
    console.log("----- checkAnswer running -----");

    time = timeResult;

    $("#game-holder").empty();
    console.log(selected);

    var res = $("<div>");
        res.addClass("row d-flex justify-content-center");

    if (parseInt($(selected).attr("value")) === questions[count].answer) {
        $(res).append("<div class= 'col-md-12 text-center border-bottom border-dark'> Correct! - the answer was " + questions[count].options[questions[count].answer] + "</div>");
        questions[count].result = "CORRECT";
    }
    else {
        $(res).append("<div class= 'col-md-12 text-center border-bottom border-dark'> Wrong! - the answer was " + questions[count].options[questions[count].answer] + '</div>');
        questions[count].result = "WRONG"
    }

    $(res).append("<div id= 'res-quote'class= 'col-md-12 mt-2'><q>" + questions[count].quote + "</q></div>");
    $(res).append("<div id= 'res-source'class= 'col-md-12 mt-2'>[" + questions[count].speaker + ", "+ questions[count].book + "]</div>");

    $("#game-holder").append(res);
    
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

    var fin = $("<div>")
        fin.addClass("row d-flex justify-content-center");

    $("#game-holder").empty();

    $(fin).append("<div class= 'col-md-12 mb-2 text-center'>That's all the questions I've got! </div>");
    $(fin).append("<div class= 'col-md-12 mb-4 text-center'> Result : " + correct + " out of " + questions.length)
    $(fin).append("<button id='reset'>Retake Quiz</button>");

    $("#game-holder").append(fin);

}

$(document).on("click", "#option-text", function() {
    stop();
    checkAnswer( this );
});

$(document).on("click", "#reset", function() {
    time = timeQuestion; 
    count = 0;
    correct = 0;

    $("#game-holder").empty();
    startTriviaGame();
});



