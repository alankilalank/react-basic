import React from "react";
import ReactDOM from "react-dom";

// React Element
const element = React.createElement("h1", { id: "header" }, "Hello World");

// ReactDOM.render([React Element | Component], [DOM Element])
ReactDOM.render(element, document.getElementById("root"));
