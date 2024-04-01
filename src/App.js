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

let circles = ["c1", "c2"];

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
    gsap.fromTo(
      ".c1",
      {
        x: 0,
        scale: 1.25,
      },
      {
        x: "30vw",
        duration: 2,
        scale: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      ".c2",
      {
        x: 0,
        scale: 1.25,
      },
      {
        x: "-30vw",
        scale: 1.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );
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
            {circles.map((c) => {
              return <div className={"moving-circles " + c} key={c}></div>;
            })}
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
      </div>
    </div>
  );
}

export default App;
