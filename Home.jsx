import React from "react";
import "./Home.css";
import Typed from "react-typed";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <h1 className="title" id="center">
        Joe Marino web development and website promotions
      </h1>
      <br />

      <span className="static-txt">I am a</span>
      <Typed
        strings={["Programmer", "Scientist", "Creator", "Designer"]}
        typeSpeed={40}
        backSpeed={50}
        loop
        className="typed"
        id="typedcolor"
      />

      <div className="buttonbox">
        <Button href="/projects" className="subtitle" variant="dark">
          My work
        </Button>
        <Button href="/AboutMe" className="subtitle2" variant="dark">
          Learn about me
        </Button>
        <Button
          href="mailto:jpmarino33@gmail.com"
          target="_blank"
          rel="noreferrer"
          variant="dark"
          className="subtitle3"
        >
          Email Me
        </Button>
        <Button
          href="https://github.com/DippinDot"
          className="subtitle4"
          target="_blank"
          variant="dark"
        >
          GitHub
        </Button>
        <Button
          href="https://www.linkedin.com/in/joemarino-22/"
          target="_blank"
          className="subtitle5"
          variant="dark"
        >
          LinkedIn
        </Button>
        <Button
          href="https://us.docworkspace.com/d/cIALt0YG3AYuL7ZkG"
          target="_blank"
          className="subtitle6"
          variant="dark"
        >
          Resume
        </Button>
      </div>
    </>
  );
}

export default Home;
