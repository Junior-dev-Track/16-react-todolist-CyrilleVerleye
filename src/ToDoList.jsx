import React from 'react';

const TodoList = () => {
  
  const todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Deploy the App', completed: false }
  ];

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TodoList };
