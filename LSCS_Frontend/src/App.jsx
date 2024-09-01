import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import React from "react";
import Result from "./components/Result";

function App() {
  const [gameLoop, setGameLoop] = React.useState("home");
  const [score, setScore] = React.useState(0);
  const rootDiv = document.getElementById("root");

  function startGame() {
    rootDiv.classList.add("sec-bg");
    setGameLoop("game");
    setScore(0);
  }

  function showScore() {
    rootDiv.classList.remove("sec-bg");
    setGameLoop("result");
  }

  function returnHome() {
    setScore(0);
    setGameLoop("home");
    setScore(0);
  }

  function incrementScore() {
    setScore((prev) => prev + 1);
  }

  return (
    <div>
      {gameLoop == "home" && <StartScreen startGame={() => startGame} />}
      {gameLoop == "game" && (
        <QuestionScreen
          incrementScore={() => incrementScore()}
          showScore={() => showScore()}
        />
      )}
      {gameLoop == "result" && (
        <Result
          score={score}
          returnHome={() => returnHome}
          startGame={() => startGame}
        />
      )}
    </div>
  );
}

export default App;
