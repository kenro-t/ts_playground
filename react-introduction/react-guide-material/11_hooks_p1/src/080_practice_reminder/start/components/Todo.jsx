import List from "./List"
import Form from "./Form"

const Todo = () => {
  

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <List />
      {/* <Form createTodo={createTodo}/> */}
    </>
  )
};
export default Todo;
