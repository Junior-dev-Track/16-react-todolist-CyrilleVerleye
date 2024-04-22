import React, { useState } from 'react';
import './ToDoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Deploy the App', completed: false }
  ]);

  const [newTodo, setNewTodo] = useState(''); // State to store the new todo

  const toggleTodoCompletion = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value); 
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') { 
      const newTodoItem = {
        id: todos.length + 1, 
        text: newTodo,
        completed: false
      };
      setTodos([...todos, newTodoItem]); 
      setNewTodo(''); 
    }
  };

  return (
    <div className="todo">
      <h2 className='todo__title'>Todo List</h2>
      <input 
        type='text' 
        name='todo' 
        className='todo__write' 
        placeholder='Add a new todo'
        value={newTodo} 
        onChange={handleInputChange} 
      />
      <input 
        type="button" 
        value="Add Todo" 
        className="todo__submit"
        onClick={handleAddTodo} 
      />
      <ul className="todo__list">
        {todos.map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodoCompletion(todo.id)} 
            />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TodoList };
