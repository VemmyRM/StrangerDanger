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
      <Navbar bg="dark" variant="dark">
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
        <iframe
          className="article"
          src="https://www.corporatetravelsafety.com/safety-tips/women_safety_tips_from_a_woman_cop/"
          style={{
            width: "80%",
            height: "300px",
            marginBottom: "10px",
          }}
        ></iframe>
      </center>
      <center>
        <iframe
          className="article"
          src="http://keepthemsafeus.com/identify-dangerous-situations/"
          style={{
            width: "80%",
            height: "300px",
            marginBottom: "10px",
          }}
        ></iframe>
      </center>
      <center>
        <div
          className="article"
          style={{
            backgroundImage: `url(${image1})`,
            width: "80%",
            height: "300px",
            backgroundSize: "cover",
            marginBottom: "10px",
          }}
        ></div>
      </center>
    </div>
  );
}

export default LandingPage;
