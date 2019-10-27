'use strict';
//REQUIREMENTS GO HERE

//Moves from the initial view to the first question
function handleStart() {
  $('.startButton').on('click', event => {
    $('.questionBox').children().html(`
        <form class="questions">
          <fieldset>
           <legend class="questionText">Question text...</legend>
            <label class="sizeMe" for="0">
             <input class="radio" type="radio" id="0" value="1" name="answer" required="">
             <span>1</span>
            </label><label class="sizeMe" for="1">
              <input class="radio" type="radio" id="1" value="2" name="answer" required="">
              <span>2</span>
            </label><label class="sizeMe" for="2">
              <input class="radio" type="radio" id="2" value="3" name="answer" required="">
              <span>3</span>
            </label><label class="sizeMe" for="3">
              <input class="radio" type="radio" id="3" value="4" name="answer" required="">
              <span>4</span>
            </label><button type="submit" class="submitButton button"> Submit</button>
          </fieldset>
        </form>`);
        
    $('.startQuiz').addClass('hidden');
    $('.questionBox').children().removeClass('hidden');
    console.log('handleStart ran');
  });
}

//Displays confirmation of correct answer
//OR
//Displays that selected answer is incorrect, showing the correct answer
//Updates score in header
function handleSubmit () {

  console.log('handleSubmit ran');
}

//Move to the next question
//OR
//Moves to the end page if no questions remain
//Updates question in header
function handleNextQuestion () {
  $('.questionBox').on('submit', event => {
  event.preventDefault();
  //if this is the last question...
  $('.questionBox').addClass('hidden');
  $('.results').removeClass('hidden');
  console.log('handleNextQuestion ran');
  });
};

//Returns to question 1 and resets the incriments for question and score
function handleRetakeQuiz () {
  $('.results button').on('click', event => {
    $('.results').addClass('hidden');
    $('.questionBox').removeClass('hidden');
    console.log('handleRetakeQuiz ran');
  });
}

//Runs all the functions when the page loads
function handleQuiz () {
  handleStart();
  handleSubmit();
  handleNextQuestion();
  handleRetakeQuiz();

  console.log('handleQuiz ran');
}

$(handleQuiz);