import React, { useState } from 'react';

const DateAndTodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = e.target.todo.value;
    setTodos([...todos, newTodo]);
    e.target.reset();
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="date-and-todo-list">
      <div className="date">
        <h1>{month}</h1>
        <h2>{day}</h2>
        <h3>{year}</h3>
      </div>
      <div className="todo-list">
        <h4>To Do List</h4>
        {todos.length > 0 ? (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => handleDeleteTodo(index)}>X</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in the to-do list</p>
        )}
        <form onSubmit={handleAddTodo}>
          <input type="text" name="todo" placeholder="Add a to-do item" />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default DateAndTodoList;
