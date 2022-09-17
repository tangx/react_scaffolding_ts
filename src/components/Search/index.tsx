import React, { Component, } from 'react'

export default class Search extends Component {

  insertTodo = (e: React.SyntheticEvent) => {
    if ((e as React.KeyboardEvent).key !== 'Enter') {
      return
    }
    const target = e.target as HTMLInputElement
    // console.log(target.value);
    target.value = ''
  }

  render() {
    return (
      <div>
        <hr />
        <input onKeyUp={this.insertTodo} type="text" placeholder='输入待办事项' />
      </div>
    )
  }
}
