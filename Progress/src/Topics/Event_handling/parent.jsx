import React, { Component } from "react";
import Child from "./child";
export class parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greedName = this.greedName.bind(this);
  }
  greedName(name) {
    alert(`hello ${this.state.parentName} from ${name}`);
  }
  render() {
    return (
      <div>
        <Child greedHandler={() => this.greedName("Parent")}></Child>
      </div>
    );
  }
}

export default parent;
