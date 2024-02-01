import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = { message: "Welcome user" };
  }
  update() {
    this.setState({
      message: "thanks for subscribing",
    });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.update()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
