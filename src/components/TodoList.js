import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, setTodos, filterTodos}) => {
        return (
            <div>
                <ul>
                    {filterTodos.map(todo => (
                        <Todo
                        todos={todos} 
                        todo={todo} 
                        setTodos={setTodos}
                        key={todo.id}
                        text={todo.text}/>
                    ))}
                </ul>
            </div>
        );
    
}

export default TodoList;