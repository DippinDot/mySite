import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <Navbar />
      <div id="grid">
        <div className="card">
          <Button
            href="https://pokemon-department-store.herokuapp.com/items"
            id="fontsize"
          >
            Safari Zone PokeStore
          </Button>
          <div>
            Purpose: A four person group project of an e-Commerce site utilizing
            the PokeApi to populate over 1000 items.
          </div>
          <div>
            Techstack: React,ExpressJS,SQL,Javascript,HTML/CSS......hosted via
            Heroku
          </div>
        </div>
        <div className="card">
          <Button
            href="https://art-collector-react-jpm.netlify.app/"
            id="fontsize"
          >
            Art Collector
          </Button>
          <div>
            Purpose: An imitation of the harvard art museum website utilizing
            react and harvards api.
          </div>
          <div>Techstack: React, AJAX </div>
        </div>
        <div className="card">
          <Button href="https://grand-gelato-3c406f.netlify.app/" id="fontsize">
            Qwirty eCommerce
          </Button>
          <div>Purpose: A frontend example of a basic commerce site</div>
          <div>
            Techstack: Basic Javascript, HTML/CSS, Media Query mobile first
            design
          </div>
        </div>
        <div className="card">
          <Button
            href="https://aqueous-peak-93931.herokuapp.com/routines"
            id="fontsize"
          >
            Fitness Tracker
          </Button>
          <div>
            Purpose: A fullstack project fitness form which allows people to
            upload activities and group them into routines.
          </div>
          <div>Techstack: NodeJS, AJAX, SQL, Javascript, HTML/CSS</div>
        </div>
        <div className="card">
          <Button
            href="https://cryptic-brushlands-02169.herokuapp.com/"
            id="fontsize"
          >
            Wizard News
          </Button>
          <span>Purpose: A basic messaging board layout</span>
          <div>
            Techstack: NodeJS, ExpressJS, AJAX, Javascript, HTML/CSS....
            Deployed using HEROKU if link is broken.
          </div>
        </div>
        <div className="card">
          <Button href="https://joetictactoe.netlify.app/" id="fontsize">
            TicTacToe
          </Button>
          <span>
            Purpose: A simple game of TicTacToe. Hope to add recursive computer
            logic soon.
          </span>
          <div>Techstack: Utilizing Vanilla Javascript and basic HTML/CSS</div>
        </div>
        <div className="card">
          <Button
            href="https://inspiring-cassata-afbd59.netlify.app/"
            id="fontsize"
          >
            Stranger's Things
          </Button>
          <span>
            Purpose: This project is a craigslist imitator utilizing our cohorts
            API.
          </span>
          <div>Techstack: Javascript, AJAX, React, HTML/CSS</div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
