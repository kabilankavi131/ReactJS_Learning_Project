import React, { Component } from "react";
// Binding Method
export class method1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome !",
    };
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
        <button onClick={this.update.bind(this)}>Click</button>
      </div>
    );
  }
}

export default method1;
