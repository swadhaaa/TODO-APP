import React, { useState } from "react";
import TodoItem from './TodoItem';

function App() {
  const initialTodos = [
    { title: "Puppy Bunny", description: "Love and Wuv" },
    { title: "Paari Kheli", description: "BOO, COO, POO" },
    { title: "WOO WOO", description: "GOM, GOL, BALLE, GOLA" },
  ].map(todo => ({ ...todo, key: todo.title + todo.description }));

  const [todos, setTodos] = useState(initialTodos);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const addTodo = () => {
    if (!newTitle || !newDescription) return;
    const newKey = newTitle + newDescription;
    if (todos.some(todo => todo.key === newKey)) {
      alert("A todo with the same title and description already exists.");
      return;
    }
    const newTodo = { title: newTitle, description: newDescription, key: newKey };
    setTodos([...todos, newTodo]);
    setNewTitle("");
    setNewDescription("");
  };

  const deleteTodo = key => setTodos(todos.filter(todo => todo.key !== key));

  const updateTodo = (key, newTitle, newDescription) => {
    const newKey = newTitle + newDescription;
    setTodos(todos.map(todo => todo.key === key ? { title: newTitle, description: newDescription, key: newKey } : todo));
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search todos"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.key}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
      <input type="text" placeholder="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;