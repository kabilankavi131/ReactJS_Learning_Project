import React from "react";
import Person from "./persons";

function list2() {
  const persons = [
    {
      name: "kabilan",
      city: "India",
    },
    {
      name: "Jacky",
      city: "USA",
    },
    {
      name: "Ramesh",
      city: "UK",
    },
  ];
  const personsList = persons.map((person) => (
    <Person key={person.name} person={person} />
  ));
  return <div>{personsList}</div>;
}

export default list2;
