import React from 'react';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} style={{ border: "1px solid red", margin: "5px", padding: "10px" }}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
          <button onClick={() => updateTodo(todo.id)}>Update Todo</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
