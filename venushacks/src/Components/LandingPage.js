import "../App.css";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image1 from "./article1.PNG";
import image2 from "./article2.PNG";
//import image3 from "./article3.PNG";

function LandingPage() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="container">
        <Navbar.Brand>Stranger Danger</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link type="submit" href="/signup">
            Login
          </Nav.Link>
          <Nav.Link type="submit" href="/submitinfo">
            Guest
          </Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <center>
        <h1>Welcome!</h1>
      </center>
      <center>
        <hr />
        <h3>Safety Tips</h3>
        <hr />
      </center>
      <h7>Women Safety Tips from a Woman Cop</h7>
      <center>
        <br />
        <iframe
          className="article"
          src="https://www.corporatetravelsafety.com/safety-tips/women_safety_tips_from_a_woman_cop/"
          style={{
            width: "80%",
            height: "400px",
            marginBottom: "10px",
          }}
        ></iframe>
      </center>
      <hr />
      <h7>How to Identify Dangerous Situations</h7>
      <center>
        <br />
        <iframe
          className="article"
          src="http://keepthemsafeus.com/identify-dangerous-situations/"
          style={{
            width: "80%",
            height: "400px",
            marginBottom: "10px",
          }}
        ></iframe>
      </center>
      <hr />
      <h7>Self Defense Moves</h7>
      <center>
        <br />
        <iframe
          className="article"
          src="https://www.healthline.com/health/womens-health/self-defense-tips-escape#intro"
          style={{
            width: "80%",
            height: "400px",
            marginBottom: "10px",
          }}
        ></iframe>
      </center>
      <center>
        <hr />
        <h3>News</h3>
        <hr />
        <iframe
          className="article"
          src="https://www.cbc.ca/news/canada/calgary/attacker-women-walking-alone-calgary-police-vigilance-1.5882785"
          style={{
            width: "80%",
            height: "300px",
            marginBottom: "10px",
          }}
        ></iframe>
      </center>
    </div>
  );
}

export default LandingPage;
