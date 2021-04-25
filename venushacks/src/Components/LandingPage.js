import "../App.css";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

import React, { useEffect, useState } from "react";
import {
    Link
  } from "react-router-dom";

function LandingPage() {

  return (
    <div>
      style={{ marginRight: 10 }}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style = {{ marginLeft: 5 }} >Stranger Danger</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link type="submit" href = '/signup'>Login</Nav.Link>
            <Nav.Link type="submit" href = '/submitinfo'>Guest</Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <h1>Welcome!</h1>
    </div>
  );

}

export default LandingPage;
