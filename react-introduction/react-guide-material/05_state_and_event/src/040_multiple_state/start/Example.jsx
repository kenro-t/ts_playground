import { useState } from "react";

const Example = () => {
    const [aVal, aSetVal] = useState(0);
    const [bVal, bSetVal] = useState(0);
    const [cVal, cSetVal] = useState(0);

    const countUp = (val, setVal) => {
        setVal(val+1)
    };
  return (
    <>
        <p>ボタンAを{aVal}回押しました！</p>
        <button
            onClick={() => {countUp(aVal, aSetVal)}}
        >ボタンA</button>
        <p>ボタンBを{bVal}回押しました！</p>
        <button
            onClick={() => {countUp(bVal, bSetVal)}}
        >ボタンB</button>
        <p>ボタンCを{cVal}回押しました！</p>
        <button
            onClick={() => {countUp(cVal, cSetVal)}}
        >ボタンC</button>
    </>
  )
};

export default Example;
