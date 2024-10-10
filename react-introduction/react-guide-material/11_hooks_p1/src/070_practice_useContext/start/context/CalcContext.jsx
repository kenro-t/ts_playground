import { createContext, useContext, useReducer } from "react"

export const CalcContext = createContext();
export const CalcUpdateContext = createContext();

const reducer = (state, { type, payload }) => {
    switch (type) {
      case "change": {
        const { name, value } = payload;
        return { ...state, [name]: value };
      }
      case "add": {
        return { ...state, result: state.a + state.b };
      }
      case "minus": {
        return { ...state, result: state.a - state.b };
      }
      case "divide": {
        return { ...state, result: state.a / state.b };
      }
      case "multiply": {
        return { ...state, result: state.a * state.b };
      }
      default:
        throw new Error("operator is invalid");
    }
};

const CalcProvider = ({ children }) => {
    const initState = {
        a: 1,
        b: 2,
        result: 3,
    };

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <CalcContext.Provider value={state}>
            <CalcUpdateContext.Provider value={dispatch}>
                {children}
            </CalcUpdateContext.Provider>
        </CalcContext.Provider>
    )
}

const useCalc = () => useContext(CalcContext);
const useCalcUpdate = () => useContext(CalcUpdateContext);

export { useCalc, useCalcUpdate, CalcProvider }