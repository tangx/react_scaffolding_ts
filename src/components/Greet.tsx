import React from 'react'

type GreetProps = {
  name: string
  messageCount?: number /** ?= 可选参数 */
  isLoggedIn: boolean
}
export default function Greet(props: GreetProps) {
  /** 取值， 并赋予默认值 */
  const { messageCount = 0 } = props
  return (

    <h2>
      {
        props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages.`
          : 'Welcome Guest!'
      }
    </h2 >

  )
}
