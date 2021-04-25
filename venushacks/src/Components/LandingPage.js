import "../App.css";
import React, { useEffect, useState } from "react";
import {
    Link
  } from "react-router-dom";

function LandingPage() {

  return (
    <div className="container">
        <Link type="submit" className="btn btn-primary" to="/signup">Sign up!</Link>
        <Link  type="submit" className="btn btn-primary"  to="/submitinfo">Guest</Link>
        <br />
        <br />
            Welcome!
    </div>
  );
}

export default LandingPage;
