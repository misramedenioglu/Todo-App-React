// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items }) => {
  return (
    <div className="todo-list">
      {items.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
