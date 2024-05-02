import React, { useState } from 'react';
import TodoItem from './TodoItem';
import DateTimeDisplay from './DateTimeDisplay';
import './App.css'; //Local CSS File I have imported not global

function App() {
  const initialTodos = [
    { title: "Puppy Bunny", description: "Love and Wuv", deadline: new Date().toISOString() },
    { title: "Paari Kheli", description: "BOO, COO, POO", deadline: new Date().toISOString() },
    { title: "WOO WOO", description: "GOM, GOL, BALLE, GOLA", deadline: new Date().toISOString() },
  ].map(todo => ({ ...todo, key: todo.title + todo.description + todo.deadline }));

  const [todos, setTodos] = useState(initialTodos);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDeadline, setNewDeadline] = useState(new Date().toISOString());
  const [searchTitle, setSearchTitle] = useState("");

  const addTodo = () => {
    if (!newTitle || !newDescription || !newDeadline) return;
    const newKey = newTitle + newDescription + newDeadline;
    if (todos.some(todo => todo.key === newKey)) {
      alert("A todo with the same title, description and deadline already exists.");
      return;
    }
    const newTodo = { title: newTitle, description: newDescription, deadline: newDeadline, key: newKey };
    setTodos([...todos, newTodo]);
    setNewTitle("");
    setNewDescription("");
    setNewDeadline(new Date().toISOString());
  };

  const deleteTodo = key => setTodos(todos.filter(todo => todo.key !== key));

  const updateTodo = (key, newTitle, newDescription, newDeadline) => {
    const newKey = newTitle + newDescription + newDeadline;
    setTodos(todos.map(todo => 
      todo.key === key ? { title: newTitle, description: newDescription, deadline: newDeadline, key: newKey } : todo
    ));
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="todo-app">
      <div className="flashing-text">This is Swadha's Todo App!</div>
      <DateTimeDisplay />
      <input
        type="search"
        placeholder="Search todos"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        className="search-input"
      />
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.key}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
      <input type="text" placeholder="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="title-input" />
      <input type="text" placeholder="Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className="description-input" />
      <input
        type="datetime-local"
        value={newDeadline}
        onChange={(e) => setNewDeadline(e.target.value)}
        className="deadline-input"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;