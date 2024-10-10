import { useCalcUpdate } from "../context/CalcContext"

const Input = () => {
    const dispatch = useCalcUpdate()

    const calculate = (e) => {
        dispatch({type: e.target.value});
    };
    const numChangeHandler = (e) => {
        dispatch({type: 'change', payload: {name: e.target.name, value: e.target.value}});
    };

    return (
        <div>
            a:
            <input
            type="number"
            name="a"
            value={state}
            onChange={numChangeHandler}
            />
        </div>
    )
}


export default Input;