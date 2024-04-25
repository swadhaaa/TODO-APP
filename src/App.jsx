import React, { useState } from "react";
import TodoList from './TodoList';

function App() {
  const initialTodos = [
    { title: "Puppy Bunny", description: "Love and Wuv", id: 1 },
    { title: "Paari Kheli", description: "BOO, COO, POO", id: 2 },
    { title: "WOO WOO", description: "GOM, GOL, BALLE, GOLA", id: 3 },
  ];
  
  const [todos, setTodos] = useState(initialTodos);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [nextId, setNextId] = useState(4);

  const addTodo = () => {
    if (!newTitle || !newDescription) return;
    
    const titleExists = todos.some(todo => todo.title.toLowerCase() === newTitle.toLowerCase());
    if (titleExists) {
      alert("A todo with the same title already exists.");
      return;
    }
    
    const newTodo = {
      title: newTitle,
      description: newDescription,
      id: nextId,
    };
    setTodos([...todos, newTodo]);
    setNewTitle("");
    setNewDescription("");
    setNextId(nextId + 1);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = id => {
    const todo = todos.find(todo => todo.id === id);
    if (!todo) {
      alert("Todo not found.");
      return;
    }

    const newTitle = prompt("Enter new title", todo.title);
    const newDescription = prompt("Enter new description", todo.description);
    if (newTitle && newDescription) {
      setTodos(todos.map(t => t.id === id ? { ...t, title: newTitle, description: newDescription } : t));
    }
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
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <input
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;