import React from "react";

function persons({ person }) {
  return (
    <div>
      <h2>
        I am {person.name}, i am from {person.city}
      </h2>
    </div>
  );
}

export default persons;
