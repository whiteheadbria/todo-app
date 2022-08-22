import React, { useState, useEffect } from 'react';
import './App.css';
// Importing Components

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //States
  const[inputText, setInputText] = useState(""); 
  const[todos, setTodos] = useState([]); // store todos, an array of objects
  const [status, setStatus] = useState('all'); //our default
  const[filteredTodos, setFilteredTodos] = useState([]);

  //run once, when the app starts
  useEffect(() => {
    getLocalTodos()
  }, []) //add empty array because it only runs once

  //useEffects        //it runs the filterHandler cases
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  //Functions and Events
  const filterHandler = () => {
    switch(status) {
      case 'completed' :
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;

        case 'uncompleted' :
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;

          default:
            setFilteredTodos(todos)
            break;
    }
  }

    //save to local so when refreshed you dont lose information
    const saveLocalTodos = () => {
      if(todos.length > 0) {
        localStorage.setItem('todos', JSON.stringify(todos))
      }
    }

    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]))
      }
      else {
       let todoLocal = JSON.parse(localStorage.getItem("todos"))
       setTodos(todoLocal)
      }
    }






  return (
    <div className="App">
    <header>
      <h1>To-Do List</h1>
      </header>

      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos}
      setStatus={setStatus}
      filteredTodos={filteredTodos}
      />  
      {/*taking setInputText and passing it into Form so we have access in Form.js*/}
      {/*same keeping same variable name as the object */ }

      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos} />
      {/*passing that data down to be accessible in TodoList.js component*/}
    </div>
  );
  }

export default App;
