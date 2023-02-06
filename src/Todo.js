import './App.css';
import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);

  return (
    <div >
      <form onSubmit={handleSubmit} id= "form">
        <input type="text" value={inputValue} onChange={handleChange} placeholder = "Enter new task" />
      </form>
      <div id='container'>
        <div id='todo'>
          <h2 className='todo'>TODO</h2>
      <ul>
        {pendingTodos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(index)}
            />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
      </div>
    
      <div id='done'>
          <h2 className='done'>DONE</h2>
      <ul>
        {completedTodos.map((todo, index) => (
          <li key={index}>
            <span>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      </div>
      </div>
      
    </div>
  );
}

export default TodoApp;