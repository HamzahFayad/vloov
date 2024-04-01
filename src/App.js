import "./App.css";
import Nav from "./Nav";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

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
  useEffect(() => {
    gsap.to(".circles", {
      y: -100,
      scale: 1.25,
      scrollTrigger: {
        trigger: ".header",
        start: "top-=100px",
        end: "bottom+=200vh",
        scrub: true,
      },
    });
    //    gsap.to(".circles", { rotation: "+=360", duration: 3 });
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="main">
        <div className="space">
          <div className="header">
            <h1>
              <span>vloov</span> <br />
              THE WAY TO FLOW .
            </h1>
            <img className="circles" src="./decos/circles.gif" alt="circles" />
          </div>
        </div>
        <div className="infos text-wrap gap2">
          <p>
            <strong>vloov</strong> is your ultimate productivity companion
            designed to elevate your focus and efficiency while adding a touch
            of delight to your daily tasks. Imagine a workspace where every
            element seamlessly integrates to enhance your workflow, offering a
            personalized and dynamic environment tailored to your needs.
            Navigate effortlessly through your tasks as you open and close
            widgets with ease, customizing your workspace to match your current
            focus
          </p>
        </div>
        <div className="features-img gap">
          {features.map((f) => {
            return <img src={f.img} alt={"img-" + f.id} key={"img-" + f.id} />;
          })}
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
