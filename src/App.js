import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <div className="space">
          <h1>
            <span>vloov</span> <br />
            THE WAY TO FLOW .
          </h1>
        </div>
        <p>Lorem Ipsum</p>
        <img src="./images/logos/vloov.png" />
      </div>
    </div>
  );
}

export default App;
