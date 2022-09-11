import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import DevDotTo from "./lib";

class App extends Component {
  render() {
    return (
      <DevDotTo
        username="genialkartik"
        coverimage={true}
        darkMode={false}
        hideTags={false}
        numberOfPosts={4}
      />
    );
  }
}
render(<App />, document.getElementById("root"));
