import React from 'react'
import { useState } from 'react'
import { AuthUser } from './User.types'


export default function User() {

  /** 由于 user 可能不存在， null。 也可能存在 AuthUser
   *  因此 useState 值有两种类型， 
   *  通过 如下命令 指定类型与初始化值
   *    useState<AuthUser | null>(null)
   */
  const [user, setUser] = useState<AuthUser | null>(null)

  const handleLogin = () => {
    setUser(
      {
        name: "zhangsan",
        email: "zs@example.com",
      }
    )
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <h3>7.2 useState: 混合类型</h3>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* 由于 user 可能为 null， 因此通过 ?. 检测时为 null， 并调用属性。 */}
      <div>User name  is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}
