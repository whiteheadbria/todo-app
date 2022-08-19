import React from "react";


const Form = ({setInputText}) => {
    // Here I can write javascript code and function
    const inputTextHandler = (e) => {
        console.log(e.target.value); 
        setInputText(e.target.value);
    }; //just using e as the event. what just happened on that event

    return (
        <form>
            <input onClick={inputTextHandler} type="text" className="todo-input" />
            <button className ="todo-button" type="submit">
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