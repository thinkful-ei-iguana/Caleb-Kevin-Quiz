'use strict';
//REQUIREMENTS GO HERE

//Moves from the initial view to the first question
function handleStart() {
  $('.startButton').on('click', event => {
    $('.startQuiz').addClass('hidden');
    $('.questionBox').children().removeClass('hidden');
    console.log('handleStart ran');
    renderQuestion();
    updateHeader();
  });
}

function updateHeader() {
  console.log('updateHeader ran');
  const header = $(`<ul aria-live="polite">
  <li>Question:
    <span class="questionNumber">${STORE.currentQuestion+1}/5</span></li>
  <li>Score:
    <span class="score">${STORE.currentScore}</span>
  </li>
</ul>`);
  $('header').html(header);
}

function renderQuestion() {
  console.log('renderQuestion ran');
  let question = STORE.questions[STORE.currentQuestion];
  //Run update Question and Score which is not written yet
  const questionHtml = `
  <form class="questions" id="questions">
   <fieldset id="radioLabel">
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
     </label>
   </fieldset>
   <button type="submit" class="submitButton button"> Submit</button>
  </form>`;
  $('.questionBox').children().html(questionHtml);
}
//Displays confirmation of correct answer
//OR
//Displays that selected answer is incorrect, showing the correct answer
//Updates score in header
function handleSubmit () {

  //initiate an event from submit
  $('.questionBox').on('submit','#questions',event => {
    console.log('handleSubmit ran');
    event.preventDefault();
  
    let currentQuest = STORE.questions[STORE.currentQuestion];
    //grab inputted value
    let selectedOption = $('input[name=answer]:checked').siblings('span').text();

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
    $('.questionBox').find('form').append(nextButton);

    //update score in heading
    updateHeader();
  });
}

function nextQuestion() {
  $('.questionBox').on('click','.nextButton', (event) => {
    event.preventDefault();
    if (STORE.currentQuestion + 1 === STORE.questions.length) {
      console.log('nextQuestion ran -> last question');
      $('.questionBox').addClass('hidden');
      $('body').addClass('finished');
      $('.results').removeClass('hidden');
      let results = `<p>You got <span>${STORE.currentScore}</span> out of 5 questions correct!</p>
          <button type="button" class="restartButton button">Retake Quiz?</button>`;
      $('.results').html(results);  
    } else {
      //change HTML to the next question
      console.log('nextQuestion ran -> NOT last question');
      STORE.currentQuestion++;
      renderQuestion(); 
    }
    updateHeader();
  });
} 

//Returns to question 1 and resets the increments for question and score
function handleRetakeQuiz() {
  $('.results').on('click', 'button', event => {
    $('.results').addClass('hidden');
    STORE.currentQuestion=0;
    STORE.currentScore=0;
    renderQuestion();
    updateHeader();
    $('body').removeClass('finished');
    $('.questionBox').removeClass('hidden');
  });
}

//Runs all the functions when the page loads
function handleQuiz() {
  console.log('handleQuiz ran');
  handleStart();
  handleSubmit();
  handleRetakeQuiz();
  nextQuestion();
}

$(handleQuiz);