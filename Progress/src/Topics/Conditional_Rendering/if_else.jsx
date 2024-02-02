import React, { Component } from "react";

class greetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }
  render() {
    let message;
    if (this.state.isLogin) message = <h1>Welcome Kabilan</h1>;
    else message = <h1>Welocme Guest</h1>;
    return message;
    // Below method is ternary condition
    return this.state.isLogin ? (
      <h1>Welcome Kabilan</h1>
    ) : (
      <h1>Welcome Guest</h1>
    );
  }
}

export default greetings;
