import Todo from "./components/Todo";

import { useState } from "react";

const todosList = [
  {
    id: 1,
    content: "店予約する",
  },
  {
    id: 2,
    content: "卵買う",
  },
  {
    id: 3,
    content: "郵便出す",
  },
];

const Example = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <>
      <Todo todosList={todosList} />
    </>
  );
};

export default Example;
