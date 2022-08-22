import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    //Events
    const deleteHandler = () => {
       setTodos(todos.filter((item) => item.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item
        }))
    }
    return (

        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>  {/*want to add javascript that's why we changed the todo item to curly brackets and`` to change in our css*/}

            <button onClick={completeHandler} className="complete-btn"> 
            <i className="fa-solid fa-check"></i>
            </button>

            <button onClick={deleteHandler} className="trash-btn"> 
            <i className="fa-solid fa-trash"></i>
            </button>

        </div>

    );
};

export default Todo;