import { useReducer } from "react";

import { CalcProvider } from "./context/CalcContext"
import  Input  from "./components/Input"
import  Select  from "./components/Select"
import  Result  from "./components/Result"

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];



const Example = () => {
  

  const calculate = (e) => {
    dispatch({type: e.target.value});
  };
  const numChangeHandler = (e) => {
    dispatch({type: 'change', payload: {name: e.target.name, value: e.target.value}});
  };
  return (
    /* 完成系のJSX */
    <CalcProvider>
      <Input name="a"/>      
      <Input name="b" />      
      <Select />
      <Result />      
    </CalcProvider>
    // <>
    //   <div>
    //     a:
    //     <input
    //       type="number"
    //       name="a"
    //       value={state.a}
    //       onChange={numChangeHandler}
    //     />
    //   </div>
    //   <div>
    //     b:
    //     <input
    //       type="number"
    //       name="b"
    //       value={state.b}
    //       onChange={numChangeHandler}
    //     />
    //   </div>
    //   <select value={state.type} name="type" onChange={calculate}>
    //     {CALC_OPTIONS.map((type) => (
    //       <option key={type} value={type}>
    //         {type}
    //       </option>
    //     ))}
    //   </select>
    //   <h3>結果：{state.result}</h3>
    // </>
  );
};

export default Example;
