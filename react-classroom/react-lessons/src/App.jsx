import React, { useState, useEffect } from "react";

import "./App.css";
import Calculator from "./components/day03-challenge/calculator/Calculator";
import InputField from "./components/day03-challenge/inputFieldDemo/inputField";
import TenLittleMonkeys from "./components/day03-challenge/TenLittleMonkeys";

function App() {
  // This is a comment
  const welcomeName = "Rob!!!";

  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}</h1>
      {/* <TenLittleMonkeys /> */}
      {/* <InputField /> */}
      <Calculator test={welcomeName} />
    </div>
  );
}

export default App;
