import { useState } from "react";

const useCount = () => {
    const [countState, setCount] = useState(0);
    const countUp = () => {
        setCount(state => state + 1);
    }
    return [countState, countUp];
}

export default useCount;