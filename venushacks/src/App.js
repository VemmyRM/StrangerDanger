import React, { useState } from "react";
import Form from "./Components/Form";
import SecondPage from "./Components/SecondPage";
import SignUp from "./Components/SignUp";
import FirstPage from "./Components/FirstPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import MapContainer from "./Components/MapContainer";
import During from "./Components/During";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/mapcontainer" component={MapContainer} />
      <Route exact path="/submitinfo" component={Form} />
      <Route exact path="/findfriends_secondpage" component={SecondPage} />
      <Route exact path="/findfriends_firstpage" component={FirstPage} />
      <Route exact path={"/submitted/:name"} component={During} />
    </div>
  </Router>
);

export default App;
