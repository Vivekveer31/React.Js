import React, { useState } from 'react';
import './App.css'

const App = () => {
  // State to manage the list of todos
  const [todos, setTodos] = useState([]);
  // State to manage the input value for adding new todos
  const [newTodo, setNewTodo] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Function to handle form submission (adding new todo)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() === '') return; // Prevent adding empty todos
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo(''); // Clear the input field after adding todo
  };

  // Function to toggle todo completion status
  const toggleTodoCompletion = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  // Function to remove todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
    <div className='container'>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoCompletion(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default App;

