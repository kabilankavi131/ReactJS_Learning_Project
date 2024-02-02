import React from "react";

function index_as_key() {
  const names = ["Kabilan", "Jacky", "Prabha"];
  return (
    <div>
      {names.map((name, index) => (
        <h1 key={index}>
          {index + 1}. hey i'm {name}
        </h1>
      ))}
    </div>
  );
}

export default index_as_key;
