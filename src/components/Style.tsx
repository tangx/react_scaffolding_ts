import React from 'react'
import Container from './style/Container'

export default function Style() {
  return (
    <div>
      <hr /><hr />
      <h2>6. Container: Style props 类型传递</h2>
      <Container styles={{ color: 'green', border: '1px solid black', padding: '1rem' }} />
    </div>
  )
}
