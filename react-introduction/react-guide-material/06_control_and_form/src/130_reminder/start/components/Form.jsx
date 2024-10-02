import { useState } from "react";

const Form = ({ createTodo }) => {
    const [enteredTodo, setEnteredTodo] = useState("");

    return (
        <>
        <input type="text"
            value={enteredTodo}
        />
        <button onClick={createTodo}>追加</button>
        </>
    );
}

export default Form;