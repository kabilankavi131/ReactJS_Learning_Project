import React, { Component } from "react";

class greetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }
  render() {
    return this.state.isLogin && <h1>Welcome Kabilan</h1>
  }
}

export default greetings;
