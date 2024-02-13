import React, { Component } from "react";
import ClassB from "./lifeCycleB";
class LifeCycleA extends Component {
  constructor() {
    super();
    this.state = {
      name: "kabilan K",
    };
    console.log("Constructor A ! ");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps A! ");
    return null;
  }
  changeState = () => {
    this.setState({
      name: "kabilan kavi 131",
    });
  };
  componentDidMount() {
    console.log("componentDidMount A !");
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }
  render() {
    console.log("Render method! A ");
    return (
      <div>
        lifeCycleA
        <button onClick={this.changeState}>Click </button>
        {/* <ClassB /> */}
      </div>
    );
  }
}
export default LifeCycleA;
