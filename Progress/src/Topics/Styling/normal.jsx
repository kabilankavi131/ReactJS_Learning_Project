import React, { Component } from "react";
import ss from "./app.module.css";
export class normal extends Component {
  render() {
    return (
      <div>
        <h1 className={ss.error}>From app.module.css File</h1>
        <h1>From normal.css File</h1>
      </div>
    );
  }
}

export default normal;
