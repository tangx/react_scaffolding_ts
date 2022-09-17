import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

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
      <Greet name="zhangsan" messageCount={110} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <hr />
      <Status status='loading' />
    </div>
  );
}

export default App;
