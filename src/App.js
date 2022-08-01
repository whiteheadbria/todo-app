import React from 'react';
import './App.css';
// Importing Components

import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
    <header>
      <h1>Bria's To-Do List</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
