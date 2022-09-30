import React, { Component } from 'react'
import { connect } from 'react-redux'
import { rootStateType } from '../store'

class ClassConnect extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h3>Class组件 + connect 函数</h3>
        ClassConnect...
      </div>
    )
  }
}

// stateProps 将 state 信息作为 props 传递给 UI 组件
const stateProps = (state: rootStateType) => {
  return {
    state,
    user: state.user.user
  }
}

// dispatchProps 将 action 列表作为 props 传递给 UI 组件
const dispatchProps = {
}

export default connect(stateProps, dispatchProps)(ClassConnect)