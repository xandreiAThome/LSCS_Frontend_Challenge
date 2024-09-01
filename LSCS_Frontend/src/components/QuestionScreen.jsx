import questions from "./questions";
import choices from "./choices";
import answers from "./answers";
import React from "react";

function QuestionScreen() {
  const [currQuestion, setCurrQuestion] = React.useState(0);

  const displayChoices = choices[currQuestion].map((choice, index) => (
    <div>
      <input type="radio" id={index} name="choices" value={choice} />
      <label htmlFor={index}>{choice}</label>
      <br />
    </div>
  ));

  return (
    <div className="question-container">
      <h2>{questions[currQuestion]}</h2>
      <div className="choices-container">{displayChoices}</div>
      <button>Submit</button>
    </div>
  );
}

export default QuestionScreen;
