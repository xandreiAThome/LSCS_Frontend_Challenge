import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import React from "react";

function App() {
  const [gameLoop, setGameLoop] = React.useState("home");

  function startGame() {
    setGameLoop("game");
  }

  return (
    <div>
      {gameLoop == "home" && <StartScreen startGame={() => startGame()} />}
      {gameLoop == "game" && <QuestionScreen />}
    </div>
  );
}

export default App;
