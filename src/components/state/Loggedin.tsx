import React from 'react'
import { useState } from 'react'  // import useState hook

export default function Loggedin() {

  /** 初始化一个 state
   * 1. 使用 useState 初始化一个状态
   * 2. 传入默认值， react 会根据默认值推断类型， 并限定类型
   * 3. 返回值时一个 Array 数组： [值变量, 修改方法]
   **/
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  return (
    <div>
      <h3>7.1 useState: useState 自动类型推断</h3>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}
