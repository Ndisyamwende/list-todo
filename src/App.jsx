import { useState } from 'react'
import './App.css'

function App() {
  const todos = [
    { id: 1, name: "Meditate" },
    { id: 2, name: "Work out" },
    { id: 3, name: "Take a walk" }
  ]

  const [newTodos, setNewTodos] = useState(todos);
  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  function addTodo() {
    if (newTodo.trim() !== "") {
      setNewTodos(prevTodos => {
        const newId = prevTodos.length + 1;
        const newTodoItem = { id: newId, name: newTodo };
        return [...prevTodos, newTodoItem];
      });
      setNewTodo("");
    }
  }

  const handleDelete = (id) => {
    const updatedTodos = newTodos.filter(todo => todo.id !== id);
    setNewTodos(updatedTodos);
  };

  return (
    <>
      <div>
        <h1>Todo-List</h1>
        <input type="text" placeholder="Enter a todo.." value={newTodo} onChange={handleInputChange} />
        <button className="add-button"  onClick={addTodo} >Add </button>
      </div>
      <ul>
        {newTodos.map((todo) => (
          <li key={todo.id}>
            {todo.name}<span onClick={() => handleDelete(todo.id)}> X</span>
          </li>
        ))}
      </ul>


    </>
  );
}

export default App
