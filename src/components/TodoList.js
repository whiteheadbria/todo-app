import React from 'react';
//Import Components 
import Todo from './Todo';

const TodoList = ({ todos }) => {
   
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {/*map through array of objects for each object render out todo component*/}
            {todos.map((todo)=> (
                <Todo text={todo.text} id={todo.id}/> 
            ) )}
            
        </ul>
      </div>
    ); 
};

export default TodoList;