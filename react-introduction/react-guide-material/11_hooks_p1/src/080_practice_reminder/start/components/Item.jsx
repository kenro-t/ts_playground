import { useTodoDispatch } from "../context/TodoContext"

const Item = ({ todo }) => {
    const dispatch = useTodoDispatch()
    const complete = (id) => {
        deleteTodo(id)
    }

    return (
        <div key={todo.id}>
            <button onClick={() => dispatch({type:"delete", id:todo.id})}>完了</button>
            <span>{todo.content}</span>
        </div>
    );
};

export default Item;