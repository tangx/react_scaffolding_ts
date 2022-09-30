import { stat } from 'fs';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { rootStateType } from '../store'
import { IAdmin } from '../store/reducers/admin';
import { IUser } from '../store/reducers/user';

interface IProps {
  admin: IAdmin,
  user: IUser
}

class ClassConnect extends Component<IProps> {
  render() {
    // console.log("user=>", this.props.user);
    // console.log("user=>", this.props.admin);

    const { user, admin } = this.props

    return (
      <div>
        <h3>Class组件 + connect 函数</h3>
        ClassConnect...
        <h4>用户: {user.id} - {user.name} - {user.nickname}</h4>
        <h4>管理员: {admin.id} - {admin.name} - {admin.role}</h4>

      </div>
    )
  }
}

// stateProps 将 state 信息作为 props 传递给 UI 组件
const stateProps = (state: rootStateType) => {

  // 结构复制， 传递 user 和 admin
  return {
    ...state.user,
    ...state.admin,
  }
}

// dispatchProps 将 action 列表作为 props 传递给 UI 组件
const dispatchProps = {
}

export default connect(stateProps, dispatchProps)(ClassConnect)