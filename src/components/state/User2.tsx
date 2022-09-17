import React from 'react'
import { useState } from 'react'
import { AuthUser } from './User.types'


export default function User2() {

  /** 使用 as 对 「空对象」 进行类型推断。
   *  这样就避免了 null 的处理
   */
  const [user, setUser] = useState<AuthUser>({} as AuthUser)

  const handleLogin = () => {
    setUser(
      {
        name: "zhangsan",
        email: "zs@example.com",
      }
    )
  }

  const handleLogout = () => {
    setUser({} as AuthUser)
  }

  return (
    <div>
      <h3>7.3 useState: 使用 as 类型推断</h3>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <div>User name  is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  )
}
