import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Event from './components/Event'
import Style from './components/Style';
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
      {/* <Greet name="zhangsan" messageCount={110} isLoggedIn={false} /> */}
      <Greet name="zhangsan" messageCount={110} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <hr />
      <Status status='loading' />

      <hr />
      <Event />

      <hr />
      <Style />
    </div>
  );
}

export default App;
