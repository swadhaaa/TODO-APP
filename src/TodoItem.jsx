import React, { useState } from 'react';
import translateText from './translationService';
import Countdown from './Countdown';

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [deadline, setDeadline] = useState(todo.deadline);

  const saveEdit = () => {
    updateTodo(todo.key, title, description, deadline);
    setEditMode(false);
  };

  const translateTitle = async () => {
    const translated = await translateText(title);
    setTitle(translated);
  };

  const translateDescription = async () => {
    const translated = await translateText(description);
    setDescription(translated);
  };

  return (
    <div className="todo-item" style={{ border: "1px solid red", margin: "5px", padding: "10px" }}>
      {editMode ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <p>{description}</p>
          <Countdown deadline={deadline} />
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.key)}>Delete</button>
          <button onClick={translateTitle}>Translate Title</button>
          <button onClick={translateDescription}>Translate Description</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;