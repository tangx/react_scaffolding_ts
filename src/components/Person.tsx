import React from 'react'

export type Name = {
  first: string
  last: string
}
type PersonProps = {
  // name: {
  //   first: string
  //   last: string
  // }

  name: Name
}

export default function Person(props: PersonProps) {
  const { name } = props
  return (
    <div>
      <hr />
      <h2 style={{ color: 'blue' }}>Person: Object Props</h2>
      <h4>{name.first} {name.last}</h4>
    </div>
  )
}
