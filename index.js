let quizScore = 0;
let questionNum = 0;

//function to restart the quiz
function restartQuiz(){
  $('.finale').on('click', '.restart', function (event){
    $('.finale').remove();
    //Why doesnt calling startQuiz OR createQuiz here restart the quiz??
    //startQuiz();
    //Any alternative(s) to using location.reload()??
    location.reload(); 
  });     
};

//provides final score of quiz
function finalFeedback(){  
  $('.main').html(
    `<div class='finale'>
      <h1>You've completed the 60th Annual Grammy Awards Quiz.</h1>
      <br>
      <h2>You're FINAL score is:<br><br><span class="green">${quizScore}/10</span><br></h2>
      <button type="submit" class="restart">Restart Quiz</button>
    </div>`
  );
  restartQuiz();
};

//renders the next question in the quiz
function renderNextQuestion(){
  $('.feedback').on('click', '.nextQuestion', function(event){
    event.preventDefault();
    $('.feedback').remove();
    if(questionNum < STORE.length-1){
      questionNum++;
      renderQuestion();
    }
    else {
      finalFeedback();
    }  
  });
};

//Test correctness and provides feedback detailing whether the user answered correctly or not. Provides correct answer if user was wrong
function userFeedback(){
  let userAnswer = $("input[name=answer]:checked").val();
  let correctAnswer = `${STORE[questionNum].correctAnswer}`;

  //could refactor -- set a variable for "${STORE[questionNum]"
  if (userAnswer === correctAnswer){
    $('.main').html(
      `<div class='feedback'>
        <h1>${STORE[questionNum].correctAnswer} <br>is<br><span class="green">CORRECT</span></h1>
        ${STORE[questionNum].artwork}
        <button type="submit" class="nextQuestion">NEXT</button>
      </div>`
    );
    quizScore++;
  }
  else {
    $('.main').html(
      `<div class='feedback'>
        <h1>${userAnswer}<br>is<br><span class="red">INCORRECT</span></h1>
        <h2>The correct answer is <br><span class="incorrect green">${STORE[questionNum].correctAnswer}</span><br></h2>
        ${STORE[questionNum].artwork}
        <button type="submit" class="nextQuestion">NEXT</button>
      </div>`
    );
  }
  renderNextQuestion();
};    

//user to submit answer
function submitAnswer(){
  $('.question').on('click', '.submitAnswer', function(event){
    event.preventDefault();

    if($("input[name=answer]:checked").val()=== undefined){
      alert("You must choose one of answers to proceed!"); 
    }
    else { 
      userFeedback();
      $('.question').remove(); 
    }
 }); 
};  

//renders the current question and the answer choices
function renderQuestion(){
  $('.main').html(
   `<div class='question'>
      <header role="banner">
          <img src="images/grammy hearder icon.png">
          <strong>
            <ul>
              <li class='questionCount'>Question: ${questionNum + 1}/10</li>
              <li class='score'>Score: ${quizScore}/10</li>
            </ul>
            <br>
          </strong> 
      </header>
      <h1>${STORE[questionNum].question}</h1>
      <form>
        <fieldset>
          <div class='selected'>
            <label>
              <input type=radio name='answer' value='${STORE[questionNum].answers[0]}' required>${STORE[questionNum].answers[0]}
              </input>
            </label>
          </div>
          <div class='selected' >
            <label>
              <input type=radio name='answer' value='${STORE[questionNum].answers[1]}' >${STORE[questionNum].answers[1]}
              </input>
            </label>
          </div>
          <div class='selected' >
            <label>
              <input type=radio name='answer' value='${STORE[questionNum].answers[2]}' >${STORE[questionNum].answers[2]}
              </input>
            </label>
          </div>
          <div class='selected' >
            <label>
              <input type=radio name='answer' value='${STORE[questionNum].answers[3]}' >${STORE[questionNum].answers[3]}
              </input>
            </label>
          </div>
          <div class='selected' >
            <label>
              <input type=radio name='answer' value='${STORE[questionNum].answers[4]}' >${STORE[questionNum].answers[4]}
              </input>
            </label>
          </div>
        </fieldset>
        <button type='submit' class='submitAnswer'>SUBMIT</button>
      </form>
    </div>`
  ); 
  submitAnswer();
};

//starts the quiz
function startQuiz(){
  $('.welcome').on('click', '.startquiz', function(event){
    $('.welcome').remove();
    renderQuestion();
  });
}; 

//Is this function necessary OR is there a way to just use startQuiz()? See below.
function createQuiz(){
  startQuiz();
  //renderQuestion();
  //submitAnswer();
  //renderNextQuestion();
};

//Why cant I call $(startQuiz) here instead? 
$(createQuiz);

