'use strict';
//REQUIREMENTS GO HERE

//Moves from the initial view to the first question
function handleStart() {
  $('.startButton').on('click', event => {
    $('.startQuiz').addClass('hidden');
    $('.questionBox').children().removeClass('hidden');
    console.log('handleStart ran');
    renderQuestion();
  });
}

function updateHeader() {
  //const header = $(``);
}

function renderQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  //Run update Question and Score which is not written yet
  const questionHtml = `
   <form class="questions">
    <fieldset>
     <legend class="questionText">${question.question}</legend>
      <label class="sizeMe" for="0">
       <input class="radio" type="radio" id="0" value="1" name="answer" required="">
       <span>${question.choices[0]}</span>
      </label><label class="sizeMe" for="1">
        <input class="radio" type="radio" id="1" value="2" name="answer" required="">
        <span>${question.choices[1]}</span>
      </label><label class="sizeMe" for="2">
        <input class="radio" type="radio" id="2" value="3" name="answer" required="">
        <span>${question.choices[2]}</span>
      </label><label class="sizeMe" for="3">
        <input class="radio" type="radio" id="3" value="4" name="answer" required="">
        <span>${question.choices[3]}</span>
      </label><button type="submit" class="submitButton button"> Submit</button>
    </fieldset>
  </form>`;
  $('.questionBox').children().html(questionHtml);
}
//Displays confirmation of correct answer
//OR
//Displays that selected answer is incorrect, showing the correct answer
//Updates score in header
function handleSubmit () {

  //initiate an event from submit
  $('.questionBox').filter('questions').on('submit', event => {
    event.preventDefault();
  
    let currentQuest = STORE.questions[STORE.currentQuestion];
    //grab inputted value
    let selectedOption = $('input[name=answer]:checked').val();
    console.log(currentQuest);
    console.log(selectedOption);

    //determine if correct
    if (selectedOption === currentQuest.answer) {
      $('.questionBox').find('input[name=answer]:checked').parent('label').append('<p>Correct!</p>');
      $('.questionBox').find('p').addClass('correct');
      STORE.currentScore++; 

    } else {
      let correction = `<p>Incorrect: the correct answer was ${currentQuest.answer}</p>`;
      $('.questionBox').find('input[name=answer]:checked').parent('label').append(correction);
      $('.questionBox').find('p').addClass('incorrect');
    }
    
    let nextButton = '<button type="next" class="nextButton button"> Next</button>';
    $('.questionBox').find('.submitButton').addClass('hidden');
    $('.questionBox').find('fieldset').append(nextButton);
    
    //update currentQuestion
    STORE.currentQuestion++;

    //update score in heading


    console.log('handleSubmit ran');
  });
}

function nextQuestion() {
  $('.questionBox').filter('.nextButton').on('click', (event) => {
    if (STORE.currentQuestion + 1 === STORE.questions.length) {
      $('.questionBox').addClass('hidden');
      $('.results').removeClass('hidden');
      let results = `<p>Correct: <span>1</span></p>
          <p>Incorrect: <span>1</span></p>
          <button type="button" class="restartButton button">Retake Quiz?</button>`;
      $('.results').append(results);  
    } else {
      //change HTML to the next question
      renderQuestion(); 
    }
    //isLastQuestion??? 
    //IF yes ...
    //$('.questionBox').addClass('hidden');
    //$('.results').removeClass('hidden');
    //trigger results
    //IF no ...
  });
} 

//Returns to question 1 and resets the incriments for question and score
function handleRetakeQuiz() {
  $('.results button').on('click', event => {
    $('.results').addClass('hidden');
    $('.questionBox').removeClass('hidden');
    console.log('handleRetakeQuiz ran');
  });
}

//Runs all the functions when the page loads
function handleQuiz() {
  handleStart();
  handleSubmit();
  handleRetakeQuiz();
  nextQuestion();

  console.log('handleQuiz ran');
}

$(handleQuiz);