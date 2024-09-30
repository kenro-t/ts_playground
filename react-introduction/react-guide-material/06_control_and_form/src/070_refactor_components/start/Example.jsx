import { useState } from "react";
import AnimalList from "./components/AnimalList";
import AnimalFilter from "./components/AnimalFilter"

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [filterVal, setFilterVal] = useState("");
  const filterAnimals = animals
    .filter(animal => animal.indexOf(filterVal) !== -1);

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filterAnimals} />
    </>
  );
};

export default Example;
