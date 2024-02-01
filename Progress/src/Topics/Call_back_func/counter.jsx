import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: 0,
    };
  }
  update_count() {
    this.setState(
      {
        counts: this.state.counts + 1,
      },
      () => console.log(this.state.counts) // this is called callback function !
    );
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
