import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

// import { Works, Greetings, WorkScreen } from "./components";

import ScrollToTop from "./util/ScrollToTop";
import Main from "./pages/Main";
// import Cyber from "./projects/Cyber";
import { Cyber } from "./projects";
import "./styles.css";

const App = () => (
  <div>
    <Router primary={false}>
      <ScrollToTop path="/">
        <Main path="/" />
        <Cyber path="cyber" />
      </ScrollToTop>
    </Router>
  </div>
);

// function App() {
//   return (
//     <div>
//       <Router primary={false}>
//         <ScrollToTop path="/">
//           <Main path="/" />
//           {/* <Lab path="lab" />
//         <About path="about" /> */}

//           {/* <Cyber path="cyber" /> */}
//         </ScrollToTop>
//       </Router>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
