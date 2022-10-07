import React from "react";

import "./Aboutme.css";
import Carousel1 from "./js/Carousel";
import { Button } from "react-bootstrap";
//try to make the slider on the cards to show each paragraph and the timeline

function Aboutme() {
  return (
    <>
      <div>
        <Carousel1 />

        <div className="card" id="card">
          <p>
            Hello, I'm Joe! I'm junior Web developer able to build a web
            presence from the ground up. The goal is to make things easier for
            everyone, no matter what it takes.
          </p>
          <p>
            I love what I do. I'm currently freelancing webdevelopment and
            broadening my techstack repertoire, where I'm creating, deploying,
            automating, and assisting users on a daily basis. I am a hard worker
            and a team player looking for a challenging opportunity with a
            company so that I can continue growing in tech while contributing
            towards a team effort. Im always trying to become a better version
            of myself! Science and technology have led me to find passions in
            places I once never expected!
          </p>

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
            <img src="timeline22.png" alt="my timeline" id="timeline" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
