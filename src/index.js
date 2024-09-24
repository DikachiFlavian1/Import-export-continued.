import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math.js";
import Flavian from "./Better.jsx";

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
    <li>{Flavian()}</li>
  </ul>,
  document.getElementById("root")
);
