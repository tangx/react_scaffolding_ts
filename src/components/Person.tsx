import React from 'react'
import { Name } from './Person.types' // 引入 types 文件

type PersonProps = {
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
