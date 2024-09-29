import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => (
            <li key={animal}>
            {animal ?? "null,undefinedでした"}
            {animal === "Dog" && "★"}
              </li>
          ))}
      </ul>
    </>
  );
};

export default Example;

// Null 合体演算子 (??)
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

// 論理積 (&&)
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND