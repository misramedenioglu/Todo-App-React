// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ item }) => {
  return (
    <div className="todo-item">
      <p>{item.text}</p>
    </div>
  );
};

export default TodoItem;
