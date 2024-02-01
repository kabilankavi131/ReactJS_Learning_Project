import React, { Component } from "react";

 class hello extends Component {
  hell() {
    console.log("hello bro");
  }
  render() {
    return (
      <div>
        <button onClick={this.hell}>Click Me</button>
      </div>
    );
  }
}

export default hello;
