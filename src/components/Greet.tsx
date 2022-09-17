import React from 'react'

type GreetProps = {
  name: string
  messageCount: number
  isLoggedIn: boolean
}
export default function Greet(props: GreetProps) {
  return (
    <h2>
      {
        props.isLoggedIn ? <h2>Welcome {props.name}! You have {props.messageCount} unread messages. </h2> : <h2>Welcome Guest!</h2>
      }
    </h2>

  )
}
