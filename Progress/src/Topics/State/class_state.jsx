import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = { message: "Welcome user" };
  }
  update() {
    this.setState({
      message: "thanks for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.update()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;

/*=============================================================================================================================================*/
// var App = () => {
//     return (
//       <div>
//         <Hello></Hello>
//       </div>
//     );
//   };

//   export default App;
