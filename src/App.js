import logo from "./logo.svg";
import "./App.css";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Kasper",
  lastName: "Petersen",
};

function App() {
  const element = <b>Hej {formatName(user)}</b>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {element} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
