import React, { Component } from "react";
class hello extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name},i think you like {this.props.intrest} !
        </h1>
        {this.props.children}
      </div>
    );
  }
}
export default hello;


// this is how we have to use this component in the App.jsx
// var App = () => {
//   return (
//     <div>
//       <Hello name="Kabilan" intrest="Coding">
//         <button>Pre Check</button>
//       </Hello>
//       <Hello name="Jacky" intrest="Travelling">
//         <button>Let's Drive</button>
//       </Hello>
//     </div>
//   );
// };
