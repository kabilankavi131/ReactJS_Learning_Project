import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: 0,
    };
  }
  update_count() {
    this.setState({
      counts: this.state.counts + 1,
    });
    // this.setState((prev) => ({
    //   counts: prev.counts + 1,  // we can use this method also !
    // }));
  }
  render() {
    return (
      <div>
        <h1>count : {this.state.counts}</h1>
        <button onClick={() => this.update_count()}>Increment</button>
      </div>
    );
  }
}

export default counter;
