function StartScreen(props) {
  return (
    <div className="start-screen">
      <h1>Quiz Trivia</h1>
      <p>
        Are you a self proclaimed Quantum Physicist? Try your knowledge now!
        <br />
        Choose one answer from three multiple choices.
      </p>
      <button className="start-button" onClick={props.startGame()}>
        Start
      </button>
    </div>
  );
}

export default StartScreen;
