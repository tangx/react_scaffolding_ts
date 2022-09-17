import React, { Component, } from 'react'

interface IProps {
  id: number,
  name: string,
  checked: boolean,
}

export default class Item extends Component<IProps> {


  handleChecked = (event: React.SyntheticEvent) => {

    if ((event as React.KeyboardEvent).key === 'Enter') {
      // console.log(111);
      const target = event.target as HTMLInputElement
      console.log(target.value);
      target.value = ''
    }
  }

  render() {
    const { id, name, checked } = this.props
    return (
      <div>
        <input type="text" onKeyUp={this.handleChecked} />
        <span>任务</span>
        <button>删除</button>
        <span>编号: {id}</span>
        <span>姓名: {name}</span>
        {/* <span>选中: {checked}</span> */}
      </div>
    )
  }
}
