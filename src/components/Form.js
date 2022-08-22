import React from "react";

//import / passing it to a prop 
const Form = ({setInputText, inputText, todos, setTodos}) => {
    // Here I can write javascript code and function
    const inputTextHandler = (e) => {
        console.log(e.target.value); 
        setInputText(e.target.value);
    }; //just using e as the event. what just happened on that event

    const submitTodoHandler = (e) => {
        e.preventDefault(); //prevents automatic refreshing after clicking plus
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000} // install a package to get unique number
        ]); // ...todos just means to contnue to add (?)

        setInputText(" "); //sets state back to 0
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} type="submit" className ="todo-button">
            <i className="fa-solid fa-plus"></i>
            </button> 

            <div className ="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted </option>
                </select>
            </div>
        </form>

    );
}

export default Form;