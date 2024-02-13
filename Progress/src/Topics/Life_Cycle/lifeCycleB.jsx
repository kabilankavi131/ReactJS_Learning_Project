import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor() {
    super();
    this.setstate = {
      name: "kabilan K",
    };
    console.log("Constructor B ! ");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps B! ");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount B !");
  }
  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }
  render() {
    console.log("Render method! B ");
    return <div>lifeCycleB</div>;
  }
}
export default LifeCycleB;
