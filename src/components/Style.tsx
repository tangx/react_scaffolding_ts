import React from 'react'
import Container from './style/Container'

export default function Style() {
  return (
    <div>
      <hr /><hr />
      <h2>Container: Style props</h2>
      <Container styles={{ color: 'green', border: '1px solid black', padding: '1rem' }} />
    </div>
  )
}
