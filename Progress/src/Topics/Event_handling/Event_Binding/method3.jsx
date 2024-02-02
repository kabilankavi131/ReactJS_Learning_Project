import React, { Component } from "react";
// Binding in the class constructor
export class method1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome !",
    };
    this.update=this.update.bind(this)
  }
  update() {
    this.setState({
      message: "Byee...!",

    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.update}>Click</button>
      </div>
    );
  }
}

export default method1;
