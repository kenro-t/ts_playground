import List from "./List"
import Form from "./Form"
const Todo = ({ todosList }) => {
  
  return (
    <>
      <h3>Todo.js</h3>
      <h2>Reminder</h2>
      {todosList.map(todo => <List todo={todo}/>)}
      <Form {...[inputVal, setInputVal]} />
    </>
  );
};

export default Todo;