import React from 'react'
import { Name } from './Person.types'

type PersonListProps = {
  names: Name[]
}


/** 在置顶形式参数时， 直接解构 */
export default function PersonList({ names }: PersonListProps) {
  return (
    <div>
      <hr />
      <h2 style={{ color: 'blue' }}>PersonList: List Props</h2>
      {
        // 这里使用 index 作为 key 是不规范的
        names.map((name, index) => {
          return (
            <h4 key={index}>{name.first} {name.last}</h4>
          )
        })
      }
    </div>
  )
}
