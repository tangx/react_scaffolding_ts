import React, { Component } from 'react'
import Item from './components/Item'
import Search from './components/Search'
import './App.css';

export default class App extends Component {

  state = {
    users: {
      id: 1,
      name: "张三",
      checked: true,
    }
  }
  render() {
    return (
      <div className='App'>
        <span>TodoList Typescript</span>
        <Search />
        <hr />
        <Item {...this.state.users} />
      </div>
    )
  }
}
