import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { Router } from "@reach/router";
import ScrollToTop from "./util/ScrollToTop";
import withTracker from "./util/withTracker";

import Main from "./pages/Main";
import { Cyber, PIPO, Border, Event, Hamsa, Test } from "./projects";

import "./styles.css";

// const App = () => (
//   <div>
//     <Router primary={false}>
//       <ScrollToTop path="/">
//         <Main path="/" />
//         <Cyber path="cyber" />
//         <PIPO path="pipo" />
//         <Border path="border" />
//         <Event path="event" />
//         <Hamsa path="hamsa" />
//         <Test path="test" />
//       </ScrollToTop>
//     </Router>
//   </div>
// );

//  <Route exact path="/" component={Main} />
//  <Route path="/cyber" component={Cyber} />
//  <Route path="/pipo" component={PIPO} />
//  <Route path="/border" component={Border} />
//  <Route path="/event" component={Event} />
//  <Route path="/hamsa" component={Hamsa} />

const App = () => (
  <Router>
    <Route exact path="/" component={withTracker(Main)} />
    <Route path="/cyber" component={withTracker(Cyber)} />
    <Route path="/pipo" component={withTracker(PIPO)} />
    <Route path="/border" component={withTracker(Border)} />
    <Route path="/event" component={withTracker(Event)} />
    <Route path="/hamsa" component={withTracker(Hamsa)} />
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
