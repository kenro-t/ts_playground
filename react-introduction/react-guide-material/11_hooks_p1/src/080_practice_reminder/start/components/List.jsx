import Item from "./Item"
import { useTodo } from "../context/TodoContext"

const List = () => {
    const todoState = useTodo();
    
    return (
        <div>
            {todoState.map(todo => {
                return (
                    <Item key={todo.id} todo={todo} />
                )
            })}
        </div>
    );
}

export default List;