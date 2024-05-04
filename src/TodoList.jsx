// Challenge 3: Create a React component called TodoList that displays a list of todo items. 
// Each todo item should have a checkbox to mark it as completed and a delete button to remove it from the list. 
// The component should include an input field and a button to add new todo items to the list.

// You can start with an array of todo items like [{"id": 1, "text": "Learn React", "completed": false}, 
// {"id": 2, "text": "Build a project", "completed": true}]. Use state to manage the list of todo items.

// When a todo item is marked as completed, update its completed status in the state. When a todo item is deleted, 
// remove it from the state. When a new todo item is added, append it to the state with a unique ID.

import React from 'react'
import { useState } from 'react';

export const TodoList = () => {

    const data = [{"id": 1, "text": "Learn React", "completed": false}, 
     {"id": 2, "text": "Build a project", "completed": true}];

     const [todos, setTodos] = useState(data);
     const [inputText, setInputText] = useState('');

     const handleSubmit = () =>{
        let todoItem = {id:todos.length +1, text:inputText, completed:false}
        setTodos([...todos, todoItem]);
        setInputText('');
     }

     const handleToggle = (Id) => {
        const updateTodos = todos.map(todo=>todo.id === Id? {...todo , completed: !todo.completed} : todo);
        setTodos(updateTodos);
     }

     const handleDelete = (Id) => {
        setTodos(todos.filter(todo => todo.id !== Id));
     }

  return (
    <>
    <div>TodoList</div>
    <div>
    <input type='text' onChange={(e)=>setInputText(e.target.value)}/>
    <button onClick={handleSubmit}>Add New</button>
    </div>
    <div>
    <ul>
    { todos.map((item) => (
    <li key={item.id}>
    <input type='checkbox' onChange={()=>handleToggle(item.id)} checked={item.completed} />
    <span style={{textDecoration:item.completed === true ? "line-through": ""}}>{item.text}</span>
    <button onClick={()=>handleDelete(item.id)}>Delete</button>
    </li>

    ))}
    </ul>
    </div>
    </>
  )
}
