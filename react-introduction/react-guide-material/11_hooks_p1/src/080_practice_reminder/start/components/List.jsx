import Item from "./Item"
import { useTodo } from "../context/TodoContext"

const List = () => {
    const todoListState = useTodo();
    console.log(todoListState)
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <div>
            {todoListState.map(todo => {
                return (
                    <Item key={todo.id} />
                )
            })}
        </div>
    );
}

export default List;