import React, { Component } from "react";
class Hello extends Component {
  render() {
    return React.createElement("h1", { id: "greed" }, "Hello Guys");
    // return <h1 id="greed">Hello Guys</h1>; This is what jsx
  }
}
export default Hello;
