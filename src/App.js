import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  useEffect(()=>{
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterhandler();
    saveLocaltodos();
  }, [todos, status] );
  const filterhandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted': 
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default: 
        setFilterTodos(todos);
        break;
    }
  }
  const saveLocaltodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem(todos, JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  return (
    <div>
      <header>
        My To Do List
          </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;