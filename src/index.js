import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import DevDotTo from "./lib";

class App extends Component {
  render() {
    return (
      <DevDotTo username="genialkartik" coverimage={true} darkMode={false} />
    );
  }
}
render(<App />, document.getElementById("root"));
