import List from "./List"
import Form from "./Form"
import { useState } from "react";

const Todo = () => {
  const todosList = [
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
    },
  ];

  // todosListの状態を管理するuseState
  const [todos, setTodos] = useState(todosList);

  const createTodo = todo => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = id => {
    const filteredTodo = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodo)
  }
  
  return (
    <>
      {<List todos={todos} deleteTodo={deleteTodo}/>}
      <Form createTodo={createTodo}/>
    </>
  );
};

export default Todo;