import { useState } from "react";

const Form = ({ createTodo }) => {
    // inputの入力情報のuseState
    const [enteredTodo, setEnteredTodo] = useState("");

    const addTodo = e => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo
        }
        createTodo(newTodo);

        setEnteredTodo("");
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text"
                    value={enteredTodo}
                    onChange={(e => setEnteredTodo(e.target.value))}
                />
            <button>追加</button>
            </form>
        </div>
    );
}

export default Form;