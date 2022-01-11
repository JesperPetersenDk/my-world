import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

const user = {
  firstName: "Hello",
  lastName: "Willumsen",
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome firstName={user.firstName} lastName={user.lastName} />
      </header>
    </div>
  );
}

export default App;
