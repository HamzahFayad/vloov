import "./App.css";
import Nav from "./Nav";

let features = [
  {
    id: 0,
    img: "./images/logos/vloov.png",
  },
  {
    id: 1,
    img: "./images/logos/vloov.png",
  },
  {
    id: 2,
    img: "./images/logos/vloov.png",
  },
];

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
        <div className="infos text-wrap gap">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="features-img gap">
          {features.map((f) => {
            return <img src={f.img} alt={"img-" + f.id} key={"img-" + f.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
