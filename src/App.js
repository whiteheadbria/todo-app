import React, { useState } from 'react';
import './App.css';
// Importing Components

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
    <header>
      <h1>Bria's To-Do List</h1>
      </header>
      <Form setInputText = {setInputText} />  {/*taking setInputText and passing it into Form
                                                so we have access in Form.js*/}
      <TodoList />
    </div>
  );
}

export default App;
