import React from 'react';
import './Todo.css';

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        //console.log(todo, todo.id);
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {if(item.id ===todo.id){
            return{
                ...item,
                completed: !item.completed
            }
        }
    return item;}))
    }
    return (
        <div className="ToDoElement">
            <li className ={`${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler}>
                <li>
                    Checked
                </li>
            </button>
            <button onClick={deleteHandler}>
                <li>
                    Trash
                </li>
            </button>
        </div>
    );

}

export default Todo;