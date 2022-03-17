import { createContext, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./Words";
import { createContext } from "react";

export const AppContext = useState(boardDefault);

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider ></AppContext.Provider>
    </div>
  );
}

export default App;
