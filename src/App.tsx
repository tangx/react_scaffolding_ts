import React from 'react';
import './App.css';
function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    { first: 'Bruce', last: 'Wayne' },
    { first: 'Clark', last: 'Kent' },
    { first: 'Princess', last: 'Diana' },
  ]

  return (
    <div className="App">
      <h1> react-redux-ts demo</h1>
    </div>
  );
}

export default App;
