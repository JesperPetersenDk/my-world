import logo from "./logo.svg";
import "./App.css";

function formatName(user) {
  if (user) {
    return user.firstName + " " + user.lastName;
  }
  return "Intet navn angivet!";
}

const user = {
  firstName: "Kasper",
  lastName: "Petersen",
};

const element = (
  <>
    <p>Hej med dig - Vi tester indholdet nu</p>  
  </>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {formatName(user)} {element}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {formatName()}
        </a>
      </header>
    </div>
  );
}

export default App;
