import React from "react";
import ReactDom from "react-dom";

const name = "Bhavesh";
const date = new Date();
const year = date.getFullYear();

ReactDom.render(
  <div>
    <h1>Hello!</h1>
    <p> created by {name}</p>
    <p> copyright {year} </p>
  </div>,
  document.getElementById("root")
);
