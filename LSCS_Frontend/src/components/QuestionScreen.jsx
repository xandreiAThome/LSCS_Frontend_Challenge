import questions from "./questions";
import choices from "./choices";
import answers from "./answers";
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
      console.log(answer.value == answers[currQuestion]);
      if (answer.value === answers[currQuestion]) {
        props.incrementScore();
      }
      setCurrQuestion((prev) => prev + 1);

      answer.checked = false;
    } else if (currQuestion == questions.length - 1) {
      console.log("hi");
    }
  }

  return (
    <div className="question-container">
      <ProgressBar progress={currQuestion} />
      <h2>{questions[currQuestion]}</h2>
      <div className="choices-container">{displayChoices}</div>
      <button onClick={submitAnswer}>Next</button>
      {props.score}
    </div>
  );
}

export default QuestionScreen;
