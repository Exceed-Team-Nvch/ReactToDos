import React from 'react';
import './App.css';
import { ToDoWrapper } from './components/ToDoWrapper';
import { MainHeader } from './components/MainHeader';

function App() {
  return (
    <div className="mainWrapper">
      <MainHeader />
      <ToDoWrapper />
    </div>
  );
}

export default App;
