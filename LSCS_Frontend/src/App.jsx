import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import React from "react";

function App() {
  const [gameLoop, setGameLoop] = React.useState("home");
  const [score, setScore] = React.useState(0);

  function startGame() {
    setGameLoop("game");
  }

  function incrementScore() {
    setScore((prev) => prev + 1);
  }

  return (
    <div>
      {gameLoop == "home" && <StartScreen startGame={() => startGame} />}
      {gameLoop == "game" && (
        <QuestionScreen incrementScore={() => incrementScore()} score={score} />
      )}
    </div>
  );
}

export default App;
