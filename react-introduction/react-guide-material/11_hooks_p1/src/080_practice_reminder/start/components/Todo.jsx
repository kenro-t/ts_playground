import List from "./List"
import Form from "./Form"

const Todo = () => {
  

  

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <List />
      <Form />
    </>
  )
};
export default Todo;
