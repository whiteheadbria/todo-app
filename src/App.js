import React, { useState } from 'react';
import './App.css';
// Importing Components

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const[inputText, setInputText] = useState(""); 
const[todos, setTodos] = useState([]); // store todos, an array of objects

  return (
    <div className="App">
    <header>
      <h1>Bria's To-Do List</h1>
      </header>
      <Form inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos}
      />  
      {/*taking setInputText and passing it into Form so we have access in Form.js*/}
      {/*same keeping same variable name as the object */ }

      <TodoList todos={todos}/>
      {/*passing that data down to be accessible in TodoList.js component*/}
    </div>
  );
}

export default App;
