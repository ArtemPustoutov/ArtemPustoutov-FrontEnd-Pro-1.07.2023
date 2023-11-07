import './App.css';
import { useSelector, useDispatch} from "react-redux";
import { addTodo, removeTodo, fetchTodo } from "./store/toDoSlice";
import TodoIteam from './toDo/toDoIteam';
import { useState, useEffect } from "react";


function App() {
  const todos = useSelector((state) => state.todo.todos);
  const count = useSelector((state) => state.todo.count);
  const data = useSelector((state) => state.todo.todos);
  const {status, error} = useSelector(state => state.todo)
  const [input, setInput] = useState(" ");

  const dispatch = useDispatch();

  const handleAddToDo = (element) => {
    element.preventDefault();
    dispatch(addTodo(input))
  }
  const handleToDoDone = (id) => {
    dispatch(removeTodo(id))
  }
  useEffect(() => {
    dispatch(fetchTodo())
  },[dispatch])

  return (
    <div className="App">
      <h1>To Do</h1>
      <form onSubmit={handleAddToDo}>
        <input type="text" onInput={(e) => setInput(e.target.value)}></input>
        <button type="submit">add</button>
      </form>
      {status === 'loading' && <h3>loading</h3>}
      {error && <h3>Error</h3>}
      <div className='addTodos'>
        {count > 0 && todos.map((todo) => (
          <TodoIteam
          key={todo.id}
          text={todo.text}
          id={todo.id}
          onCheck={handleToDoDone}
          />
        ))}
      </div>
      <div className='fetch'>
      {data.map((data) => (
          <TodoIteam
          key={data.id}
          text={data.name}
          id={data.id}
          onCheck={handleToDoDone}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
