# TriviaGame
05-JavaScript Assignment 2

Explaination : 

 =============== Initial Phase ===============

question object made which contains a question (string), an array of options (strings), an answer (integer), a result (string), and a gif (string).

then questions are created using a question object and assigning values for the question, options, answer, and gif of the object. 

an array of objects called questions is created, to reference the objects as the game progresses. 

- intervalId is made to house the timer. 
- timeQuestion is created to identify the max amount of time per question.
- timeResult is created to identify the time the result screen is viewed.
- correct is created to house the number of correct answers. 
- count is created to house the index for the game. As it progresses count will increase and be used to identify the question that's currently being asked. 

 =============== Game Start Phase ===============

 The HTML is a background with a single start. Once clicked the game will begin using the startTriviaGame function. 

 StartTriviaGame will execute the function displayQuestion, which will write the initial time to timer-display, which will delete the image-holder text (which houses the start button initially) and will begin writting the question, and options of questions[0] to the html. 

 A switch statement is used to create the options text. This is done to be able to personalize classes and values, as well as the text within the option selection. (=== I recognize using .addClass, .attr, and the i to set #'s would've been optimal, however I chose the switch statement because it was easier for the reader & myself to follow the logic of the code===)

 After the question is displayed to the user intervalId begins to decrement at a pace of 1 second. The timer, set to timeQuestion then begins ticking down, each time updating #timer-display. if it gets below 10, it writes 0+time to keep it to two digits displayed at all times. When time === 0 the intervalId stop (utilizing the stop() function), the #timer-display will identify time is up, and the check answer function will run. 

 Alternatively : if the user clicks on an option available to them (identified with the #option-text) then the intervalId will also stop (utilizing the stop() function), and the check answer function will run and pass "this" or the button value that was clicked.

  =============== Check Answer Phase ===============

  During the initialization of checkAnswers the time will be reset to timeResult (the time identified for this page to be viewed) and the #image-holder will be cleared of all conents (which at this point should be the question & options). If the value of the button clicked is equal to the value in questions[count].answer (or the answer identified during generation of the question object) then it will display correct in the #image-holder as well as set the objects .result value to "CORRECT". otherwise it'll display wrong and set the objects .result value to "WRONG". The reason that this works when no button is clicked is becuase "this" is never passed and thus unidentified, meaning it won't equal the value of questions[count].answer. After that message is sent, a gif tied/related to the question will be displayed as well. 

  Another stop function is run (precautionary) and intervalId is set to run the answerPrompt function at a rate of 1 second. 

  The answerPrompt function runs for 4 seconds, each second time decreases by 1 second (time given its new value above during checkAnswers). When time = 0, time is reset to the time allotted per question timeQuestion and the counter will increase by 1. if the count is equal to the number of questions (questions.length), then it will run the finalPrompt function and run a stop() (to turn off the intervalId). Otherwise it will display the next question, turn off intervalId, then start intervalId again and begin the decrement function as it does in the Game Start Phase. 

  =============== Check Answer Phase ===============

If the conditions for the finalPrompt have been met it will begin by going through each of the questions.results and count how many were "CORRECT". The #image-holder is then cleared, and in it an ending message, the users result, and a button will be added. The button added is a reset button, which, if clicked will allow the user to reset the game. 

The game is reset by resetting the time to timeQuestion, resetting the count and correct variables to 0, wiping clean the #image-holder and calling the startTriviaGame() function. 



S.Georges 
4/4/2019 22:47
