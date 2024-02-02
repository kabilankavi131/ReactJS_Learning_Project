import React from "react";

export default function list1() {
  const names = ["Kabilan", "Jacky", "Daniyal"];
  const ns = names.map((n) => <h1>Welcome {n}</h1>);
  return (
    <div>
      {names.map((name) => (
        <h1>Hello {name}</h1>
      ))}
      <hr></hr>
      {ns}
    </div>
  );
}
