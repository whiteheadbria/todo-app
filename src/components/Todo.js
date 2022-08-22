import React from 'react';

const Todo = () => {
    return (

        <div className="todo">
            <li className="todo-item"></li>
            <button className="complete-btn"> 
            <i className="fa-solid fa-trash"></i>
            </button>

            <button className="trash-btn"> <i className="fa-solid fa-trash"></i></button>
        </div>

    );
};

export default Todo;