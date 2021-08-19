import "./App.css";
import AboutMe from "./components/day01-challenge/AboutMe";
import Header from "./components/day01-challenge/Header";
import StudentInformation from "./components/day01-challenge/StudentInformation";

function App() {
  // This is a comment
  const welcomeName = "Rob!!!";

  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}</h1>
      <h2>We just modified our root App component</h2>
      {/* <p>This is a test</p>  ~ This is a comment*/}
      <Header />
      <h3>Create the following...</h3>
      <ul>
        <li>
          Create new component in the day01-challenges folder called AboutMe
        </li>
        <li>h1 tag with your name</li>
        <li>p tag with the following I grew up in city/state</li>
        <li>have an unordered list with 3 places you have visited</li>
      </ul>
      <p>
        Export the component, and import the new component into the App.jsx
        file.
      </p>
      <hr />
      <h1>Bonus</h1>
      <p>Make the h1 tag (your name) be red in color using inline styling</p>
      <p>Make the li's no bullets - inline styling</p>
      <AboutMe />
      <StudentInformation studentName="Pam" grade="B" subject="math" />
      <StudentInformation studentName="Tom" grade="A" subject="Science" />
      <StudentInformation studentName="Frank" grade="F" subject="English" />
    </div>
  );
}

export default App;
