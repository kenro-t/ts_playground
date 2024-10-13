import { useContext, createContext, useReducer} from "react";

export const TodoContext = createContext();
export const TodoDispatchContext = createContext();
export const useTodo = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);

export const TodoProvider = ({ children }) => {
    const initTodoListState = [
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
        }
    ];

    const reducer = (state, {type, id}) => {
        switch(type) {
            case "add": {
                return
            }
            case "delete": {
                return state.filter((todo) => todo.id !== id);
            }
        }
    }
    
    const [ todoState, dispatch ] = useReducer(reducer, initTodoListState);

    return (
        <TodoContext.Provider value={todoState}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
};