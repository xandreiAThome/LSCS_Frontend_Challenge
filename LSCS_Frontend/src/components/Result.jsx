import questions from "../data/questions";

function Result(props) {
  return (
    <div className="results-container">
      <h1>
        Score: {props.score}/{questions.length}
      </h1>
      <h2>
        {props.score / questions.length >= 0.8
          ? "Great Job, you're quite the physicist"
          : props.score / questions.length >= 0.4
          ? "You're getting there"
          : "Study harder!"}
      </h2>

      <div>
        <button onClick={props.returnHome()}>Home</button>
        <button onClick={props.startGame()}>Play again</button>
      </div>
    </div>
  );
}

export default Result;
