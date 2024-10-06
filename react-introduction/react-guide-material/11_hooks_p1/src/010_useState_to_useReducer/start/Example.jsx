import { useState, useReducer } from "react";
import { reducer } from "../../../../13_redux/end/src/020_actionCreator/store/modules/counter";

const Example = () => {
  const [val, setVal] = useState(0);
  
  const countUp = () => {
    setVal(prev => {
      return ++prev;
    })
  }

  // useStateの第一引数recucer関数にはsatateとactionが定義できる

  // === 別関数として切り出した場合 ===
  const reducer = (prev, {type}) => {
    switch(type) {
      case "+":
        return ++prev;
      case "-":
        return --prev;
    }
  }

  // reducerをセットするだけで引数が渡せる
  const [rVal, dispatch] = useReducer(reducer, 0);

  // ↓みたいに一度クロージャとして引数を取る必要がない
  // const [rVal, dispatch] = useReducer((state, action) => reducer(state, action), 0)
  // ================================

  // 一つにまとめた場合
  // const [rVal, dispatch] = useReducer((state, {type}) => {
  //   switch(type) {
  //     case "+":
  //       return ++state;
  //     case "-":
  //       return --state;
  //   }
  // }, 0);  

  const rCountUp = () => {
    dispatch({type: "+"})
  }
  const rCountDown = () => {
    dispatch({type: "-"})
  }
  return (
    <>
      <h3>{val}</h3>
      <button onClick={countUp}>+</button>
      <h3>{rVal}</h3>
      <button onClick={rCountUp}>+</button>
      <button onClick={rCountDown}>-</button>
    </>
  );
};

export default Example;

