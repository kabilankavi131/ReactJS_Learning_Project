import React, { Component } from "react";
class hello extends Component {
  render() {
    const { name, intrest } = this.props;
    return (
      <div>
        <h1>
          Hello {name},i think you like {intrest} !
        </h1>
      </div>
    );
  }
}
export default hello;
