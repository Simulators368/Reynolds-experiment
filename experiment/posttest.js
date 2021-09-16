/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Velocity within the given fields would be similar in magnitude, direction and turbulence pattern when ",  ///// Write the question inside double quotes
      answers: {
        a: "Nusselt number are different",                  ///// Write the option 1 inside double quotes
        b: "Nusselt number are same",                  ///// Write the option 2 inside double quotes
        c: "Reynolds number are different",                  ///// Write the option 3 inside double quotes
        d: "Reynolds number are same"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
      question: "A pipe has a diameter of 0.2 m in which a fluid flows with a velocity of 0.3 m3/s. Determine whether the flow is laminar or turbulent calculating the Reynolds number. Assume kinematic viscosity = 0.5 × 10-4 m2 /s?",  ///// Write the question inside double quotes
      answers: {
        a: "The flow is laminar having Reynolds number 1200",                  ///// Write the option 1 inside double quotes
        b: "The flow is laminar having Reynolds number 2100",                  ///// Write the option 2 inside double quotes
        c: "The flow is laminar having Reynolds number 2200",                  ///// Write the option 3 inside double quotes
        d: "The flow is neither laminar nor turbulent"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    
    	{
      question: "Reynold's number is directly proportional to?",
      answers: {
        a: "Pipe Diameter",
        b: "Flow Velocity",
        c: "Both A and B",
        d: "Neither A and B"
      },
      correctAnswer: "c"
    },
    
    {
      question: "Which of the following is NOT a characteristic of a stream with laminar streamflow?",
      answers: {
        a: "Quiet",
        b: "Water that moves quickly",
        c: "Water that flows in a straight line",
        d: "No visible physical barriers"
      },
      correctAnswer: "b"
    },
    
    {
      question: "The turbulent flow has ?",
      answers: {
        a: "streakline motion",
        b: "parabolic velocity distribution",
        c: "random orientation of fluid particles",
        d: "small slope of velocity profile at the wall"
      },
      correctAnswer: "c"
    },

    ///// this line
 

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
