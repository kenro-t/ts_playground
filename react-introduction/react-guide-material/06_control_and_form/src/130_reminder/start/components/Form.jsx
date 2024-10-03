import { useState } from "react";

const Form = ({ createTodo }) => {
    // inputの入力情報のuseState
    const [enteredTodo, setEnteredTodo] = useState("");

    const addTodo = e => {
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo
        }
        createTodo(newTodo);

        setEnteredTodo("");
    }

    return (
        <>
        <input type="text"
            value={enteredTodo}
            onChange={(e => setEnteredTodo(e.target.value))}
        />
        <button onClick={addTodo}>追加</button>
        </>
    );
}

export default Form;