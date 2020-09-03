import React ,{Component}from 'react';
import { render } from "react-dom";
import DevDotTo from "./lib";

class App extends Component {
  render(){
    return(
      <DevDotTo username="genialkartik" />
    )
  }
}
render(<App />, document.getElementById("root"));
