import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    window.setInterval(() => {
      setTime(prev => prev+1)
    },1000)
  },[])

  return <>{time}秒経過</>;
};

export default Example;
