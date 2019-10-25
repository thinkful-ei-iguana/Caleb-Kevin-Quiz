'use strict';
 //REQUIREMENTS GO HERE

 //Moves from the initial view to the first question
function handleBegin() {

    console.log('handleBegin ran');
}

//Displays confirmation of correct answer
//OR
//Displays that selected answer is incorrect, showing the correct answer
//Updates score in header
function handleSubmit () {

    console.log('handleSubmit ran')
}

//Move to the next question
//OR
//Moves to the end page if no questions remain
//Updates question in header
function handleNextQuestion () {

    console.log('handleNextQuestion ran');
}

//Returns to question 1 and resets the incriments for question and score
function handleRetakeQuiz () {

    console.log('handleRetakeQuiz ran')
}

//Runs all the functions when the page loads
function handleQuiz () {
    handleBegin();
    handleSubmit();
    handleNextQuestion();
    handleRetakeQuiz();

    console.log('handleQuiz ran')
}

$(handleQuiz);