import React from "react";

function child(props) {
  return (
    <div>
      <button onClick={props.greedHandler}>Greed Parent</button>
    </div>
  );
}

export default child;
