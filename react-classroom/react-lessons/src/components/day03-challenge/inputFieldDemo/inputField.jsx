import React, { useState } from "react";
const InputField = (props) => {
  const [username, setUsername] = useState("");

  function handleOnChange(event) {
    console.log("handleOnChange was called");
    // username = event.target.value  *** Do not do this
    setUsername(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div>
      <p>Hello from InputField</p>
      <input type="text" value={username} onChange={handleOnChange} />
    </div>
  );
};

export default InputField;
