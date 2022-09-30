import { stat } from 'fs';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { rootStateType } from '../store'
import { IAdmin } from '../store/reducers/admin';
import { IUser } from '../store/reducers/user';
import { changeAdminName, IAdminAction } from '../store/actions/admin'


interface IProps {
  admin: IAdmin,
  user: IUser,
  changeAdminName: (admin: IAdmin) => IAdminAction,
}

class ClassConnect extends Component<IProps> {

  // 修改管理员名字
  changeAdminName = () => {
    const { admin } = this.props

    this.props.changeAdminName({
      ...admin, name: admin.name + "1"
    })
  }


  render() {

    const { user, admin } = this.props

    return (
      <div>
        <h3>Class组件 + connect 函数</h3>
        ClassConnect...
        <h4>用户: {user.id} - {user.name} - {user.nickname}</h4>
        <h4>管理员: {admin.id} - {admin.name} - {admin.role}</h4>

        <button onClick={this.changeAdminName}>点击修改 管理员名字</button>
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
  changeAdminName
}

export default connect(stateProps, dispatchProps)(ClassConnect)