import React, { useState } from 'react';
import "../style/Todo.css"

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
          <h1></h1>
          <div id='todo'>
              
      <div id='todobox'>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button id='todobtn' onClick={handleAddTodo}>Add</button>
      </div>
              
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
              </ul>
              </div>
    </div>
  );
}

export default TodoApp;