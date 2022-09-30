import React from 'react';
import './App.css';
import Count from './components/Count';
import People from './components/People';

function App() {

  return (
    <div className="App">
      <h1> react-redux-ts: people-and-count</h1>
      <hr />
      <Count />
      <hr />
      <People />
    </div>
  );
}

export default App;
