import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [ans, setAns] = useState(null);
  const inputRef = useRef();

  const inputArr = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];

  const clickHandler = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "=") {
      if (inputRef.current.value === "") {
        setAns("Error");
        return;
      }

      setAns(eval(inputRef.current.value));
      // setAns(eval(e.target.innerText));
    } else if (e.target.innerText === "C") {
      setInputText("");
      setAns("");
    } else {
      setInputText((prevState) => prevState + e.target.innerText);
    }
  };

  return (
    <div className="calcContainer">
      <h1>React Calculator</h1>
      <input ref={inputRef} type="text" value={inputText} />

      {ans && <div className="ans">{ans}</div>}

      <div
        className="calcButtons"
        onClick={(e) => {
          clickHandler(e);
        }}
      >
        {inputArr.map((input) => {
          return (
            <button id={input} className="numberButtons">
              {input}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
