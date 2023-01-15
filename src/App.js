import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to betabeta. Don't go back</p>
        <a
          className="App-link"
          href="https://gammapage.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Every iota </p>
        <a
          className="App-link"
          href="https://iotapage.netlify.app/"
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
