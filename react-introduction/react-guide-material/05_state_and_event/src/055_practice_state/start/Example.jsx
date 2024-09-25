import { useState } from "react";

const Example = () => {
  const [counter, setCounter] = useState(0);
  const countUp = () => {
    setCounter(prevState => prevState+1);
  };
  const countDown = () => {
    setCounter(prevState => prevState-1);
  };
  return (
    <>
      <h3>練習問題</h3>
      <p>現在のカウント数: {counter}</p>
      <button
        onClick={countUp}
      >+</button>
      <button
        onClick={countDown}
      >-</button>
    </>
  );
};

export default Example;
