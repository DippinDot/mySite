import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="nav">
      <Button href="/" className="subtitle" variant="dark">
        Home
      </Button>
      <Button href="/projects" className="subtitle2" variant="dark">
        My Work
      </Button>
      <Button href="/AboutMe" className="subtitle3" variant="dark">
        Learn About Me
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
    </nav>
  );
}

export default Navbar;
