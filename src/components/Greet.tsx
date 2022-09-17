import React from 'react'

type GreetProps = {
  name: string
}
export default function Greet(props: GreetProps) {
  return (
    <h2>Welcome {props.name}! You have 10 unread messages. </h2>
  )
}
