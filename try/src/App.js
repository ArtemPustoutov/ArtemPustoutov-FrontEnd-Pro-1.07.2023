import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./toDo/toDoSlice";
import TodoIteam from './toDo/toDoIteam';
import { useState } from "react";


function App() {
  const todos = useSelector((state) => state.todo.todos);
  const count = useSelector((state) => state.todo.count);
  const [input, setInput] = useState(" ");

  const dispatch = useDispatch();

  const handleAddToDo = (element) => {
    element.preventDefault();
    dispatch(addTodo(input))
  }
  const handleToDoDone = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div className="App">
      <h1>To Do</h1>
      <form onSubmit={handleAddToDo}>
        <input type="text" onInput={(e) => setInput(e.target.value)}></input>
        <button type="submit">add</button>
      </form>
      <div className='addTodos'>
        {count > 0 && todos.map((todo) => (
          <TodoIteam
          key={todo.id}
          text={todo.text}
          id={todo.id}
          onCheck={handleToDoDone}
          />
        ))}
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
}

export default App;
