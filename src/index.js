import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import ScrollToTop from "./util/ScrollToTop";
import Main from "./pages/Main";
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
