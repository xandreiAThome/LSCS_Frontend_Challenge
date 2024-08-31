import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import StartScreen from "./components/StartScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <StartScreen />
    </div>
  );
}

export default App;
