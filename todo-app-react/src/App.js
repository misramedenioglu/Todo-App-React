import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import './index.css';

const App = () => {
  const [items, setItems] = useState([
    { text: 'Learn React' },
    { text: 'Build a To Do App' },
    { text: 'Share on GitHub' }
  ]);
  const [newItemText, setNewItemText] = useState('');

  const addItem = (event) => {
    event.preventDefault(); // Formun varsayılan davranışını engelle
    if (newItemText.trim() === '') return; // Boş metin eklemeyi engelle
    setItems([...items, { text: newItemText }]);
    setNewItemText(''); // Giriş alanını temizle
  };

  return (
    <div className="app">
      <Header />
      <TodoList items={items} />
      <form onSubmit={addItem}>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Yeni görev ekle..."
        />
        <button type="submit">Add New Task</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
