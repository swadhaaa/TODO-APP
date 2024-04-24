//CRUD Functionality is not implemented completely in this push will implement in next one. To manage the code and focus on task at hand I have removed some lines.

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // We are using version 4 of UUID because dev said so, Unique identofier
function App() { //here we are having list of todo item
  const [todos, setTodos] = useState([
    { title: "Puppy Bunny", description: "Love and Wuv", id: uuidv4() },
    { title: "Paari Kheli", description: "BOO, COO, POO", id: uuidv4() },
    { title: "WOO WOO", description: "GOM, GOL, BALLE, GOLA", id: uuidv4() },
  ]);
  const [newTitle, setNewTitle] = useState(""); // declaration
  const [newDescription, setNewDescription] = useState("");
  const [searchTitle, setSearchTitle] = useState(""); //state of searching the title in our input box

  const addTodo = () => {
    if (!newTitle || !newDescription) return;
    const newTodo = {
      title: newTitle,
      description: newDescription,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
    setNewTitle("");
    setNewDescription("");
  };
  const displayTodos = () => { //using filter and map
    const filteredTodos = todos.filter((todo) => //based on the string of search input box todo will be filtered out here
      todo.title.toLowerCase().includes(searchTitle.toLowerCase()), // changing the lowecase
    );
    return filteredTodos.map((todo) => ( //we will create the jsx element once we have the filtered todos
      <div
        key={todo.id} //elements of my list has id ehich is unique for rendering, without it react will not know what changes are done
        style={{ border: "1px solid red", margin: "5px", padding: "10px" }}
      >
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
    ));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search todos"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)} //Input boxS
      />
      {displayTodos()}
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
