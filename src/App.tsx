import React from 'react';
import logo from './logo.svg';
import logitem from './log-item.jpg';
import './App.css';
import Logs from './components/Logs';

function App() {


  return (
    <div className="App">
      <img src={logitem} alt="log-item" />
      <hr /><hr />

      <Logs />
    </div>
  );
}

export default App;
