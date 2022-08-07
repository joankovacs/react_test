import './App.css';
import ProgressTimer from './ProgressTimer';



function App() {

  //const timer = ProgressTimer(85, "teal")

  return (
    <div className="App">
      <header className="App-header">
          <ProgressTimer percentage={85} colour={"teal"}></ProgressTimer>

        <p>
          Basic bitch PWA, eh?
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
