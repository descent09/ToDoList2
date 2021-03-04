import React from 'react';


const Form = ({ setStatus, setInputText, setTodos, todos, inputText }) => {
    const inputTextHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
        setInputText("");
    }
    const statusHandler = (e) => {
        //console.log(e.target.value);
        setStatus(e.target.value)
    }
    return (
        <div>
            <form>
                <input 
                value={inputText} 
                type="text" 
                className="todo-input" 
                onChange={inputTextHandler} />

                <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                    Add
                    </button>
                <div className="select">
                    <select onChange = { statusHandler } name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );

}

export default Form;