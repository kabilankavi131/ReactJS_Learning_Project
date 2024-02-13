import React, { Component } from "react";
import Column from "./column.jsx";
import Data from "./data.jsx";
import Footer from "./footer.jsx";
class table extends Component {
  render() {
    const headerStyle = {
      backgroundColor: "violet",
    };
    const bodyStyle = {
      backgroundColor: "grey",
    };
    const footerStyle = {
      backgroundColor: "green",
    };

    return (
      <table border={5} width={"400px"}>
        <thead>
          <tr style={headerStyle}>
            <Column></Column>
          </tr>
        </thead>
        <tbody style={bodyStyle}>
          <Data></Data>
        </tbody>
        <tfoot style={footerStyle}>
          <Footer></Footer>
        </tfoot>
      </table>
    );
  }
}

export default table;
