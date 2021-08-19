import React, { useState, useEffect } from "react";

import "./App.css";
import ClickCounter from "./components/day02-challenge/ClickCounter/ClickCounter";
import PresidentParent from "./components/day02-challenge/Presidents/PresidentParent";
import ParentComponent from "./components/day02-challenge/Votes/ParentComponent";
function App() {
  // This is a comment
  const welcomeName = "Rob!!!";
  const [countValue, setCountValue] = useState(3);

  function handleClick() {
    console.log("It Clicked");
    countValue = countValue + 1;
    console.log(countValue);
  }
  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}</h1>
      <p>The count value is : {countValue}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
