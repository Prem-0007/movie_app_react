import { useState, useEffect } from "react";
import "./App.css";
import NewToDoForm from "./NewToDoForm.jsx";

const LOCAL_STORAGE_KEY = "todo-app";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos == null) return [];
    return JSON.parse(storedTodos);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), text, completed: false }
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(currentTodos =>
      currentTodos.filter(todo => todo.id !== id)
    );
  }

  return (
    <div className="app">
      <NewToDoForm addTodo={addTodo} />

      <h1 className="header">Todo List</h1>

      <ul className="list">
        {todos.length === 0 && <p>No todos</p>}

        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={e =>
                  toggleTodo(todo.id, e.target.checked)
                }
              />
              <span>{todo.text}</span>
            </label>

            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}