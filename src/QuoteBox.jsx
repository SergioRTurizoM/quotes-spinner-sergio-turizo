import { useState } from "react";
import "./QuoteBox.css";
import quotes from "./quotes.json";

function App() {
  const start = Math.floor(Math.random() * quotes.length);
  const [count, setCount] = useState(start);

  const changeAll = () => {
    const index2 = Math.floor(Math.random() * quotes.length);

    setCount(index2);
  };

  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  document.body.style = `background: rgb(${red},${green},${blue})`;

  return (
    <div className="App">
      <div className="Container">
        <p
          className="Quote"
          style={{ color: `rgb(${red}, ${green}, ${blue})` }}
        >
          <i class="fa-solid fa-quote-left fa-2x"></i>
            {quotes[count].quote}
          <i class="fa-solid fa-quote-right fa-2x"></i>
        </p>
        <p
          className="Author"
          style={{ color: `rgb(${red}, ${green}, ${blue})` }}
        >
          {quotes[count].author}
        </p>

        <div></div>
        <div className="ContainerBtn">
          <button
            type="submit"
            onClick={changeAll}
            style={{ color: `rgb(${red}, ${green}, ${blue})` }}
          >
            <i class="fa-solid fa-dice-d20 fa-3x fa-beat-fade fa-spin"></i>
            {/* <i class="fa-regular fa-circle-chevron-right fa-5x"></i> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

