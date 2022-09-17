import React from 'react'
import User from './state/User'
import Loggedin from './state/Loggedin'
import User2 from './state/User2'

export default function
  () {
  return (
    <div>
      <hr /><hr />
      <h2>7. State: 使用 useState 初始化状态</h2>
      <Loggedin />
      <hr />
      <User />
      <hr />
      <User2 />
    </div>
  )
}
