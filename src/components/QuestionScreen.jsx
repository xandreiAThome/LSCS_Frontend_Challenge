import questions from "../data/questions";
import choices from "../data/choices";
import answers from "../data/answers";
import React from "react";
import ProgressBar from "./ProgressBar";

function QuestionScreen(props) {
  const [currQuestion, setCurrQuestion] = React.useState(0);

  // create the div for the choices
  const displayChoices = choices[currQuestion].map((choice, index) => (
    <div>
      <input type="radio" id={index} name="choices" value={choice} />
      <label htmlFor={index}>{choice}</label>
      <br />
    </div>
  ));

  function submitAnswer() {
    let answer = document.querySelector('input[name="choices"]:checked');

    if (answer != null && currQuestion < questions.length - 1) {
      if (answer.value === answers[currQuestion]) {
        props.incrementScore();
      }
      setCurrQuestion((prev) => prev + 1);

      answer.checked = false;
    } else if (currQuestion == questions.length - 1) {
      if (answer.value === answers[currQuestion]) {
        props.incrementScore();
      }
      setCurrQuestion(0);
      props.showScore();
    }
  }

  return (
    <div className="question-container">
      <ProgressBar progress={currQuestion} />
      <h2>{questions[currQuestion]}</h2>
      <div className="choices-container">{displayChoices}</div>
      <button onClick={submitAnswer}>Next</button>
    </div>
  );
}

export default QuestionScreen;
