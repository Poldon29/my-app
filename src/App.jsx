import logo from './logo.svg';
import './App.css';

function App() {
  const OpenAlert = () =>{
    alert('hello react')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={OpenAlert}>Pop alert</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          className="App-link" 
          href="https://github.com/Poldon29/my-app" 
          target="_blank"
          rel="noopener noreferrer"
        >
          My Git :)
        </a>
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
