import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
// import ReactGA from "react-ga";

// import { Works, Greetings, WorkScreen } from "./components";

import ScrollToTop from "./util/ScrollToTop";
import Main from "./pages/Main";
// import Cyber from "./projects/Cyber";
import { Cyber, PIPO, Border, Event, Hamsa, Test } from "./projects";
import "./styles.css";

const App = () => (
  <div>
    <Router primary={false}>
      <ScrollToTop path="/">
        <Main path="/" />
        <Cyber path="cyber" />
        <PIPO path="pipo" />
        <Border path="border" />
        <Event path="event" />
        <Hamsa path="hamsa" />
        <Test path="test" />
      </ScrollToTop>
    </Router>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
