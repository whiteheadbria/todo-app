import React from 'react';
//Import Components 
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
   
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {/*map through array of objects for each object render out todo component*/}
            {filteredTodos.map((todo)=> (
                <Todo 
                setTodos={setTodos} 
                todos={todos} 
                todo={todo}
                text={todo.text} 
                key={todo.id} /> 
             ))}

            {/*pass down data from state, have access in the Todo.js*/}

        </ul>
      </div>
    ); 
};

export default TodoList;