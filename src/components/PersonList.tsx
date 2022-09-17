import React from 'react'
import { Name } from './Person'

type PersonListProps = {
  /* 直接写法 */
  // names: {
  //   first: string
  //   last: string
  // }[]

  /** 引用写法 */
  names: Name[]
}



export default function PersonList(props: PersonListProps) {
  return (
    <div>
      <hr />
      <h2 style={{ color: 'blue' }}>PersonList: List Props</h2>

      {
        props.names.map(name => {
          return (
            <h4>{name.first} {name.last}</h4>
          )
        })
      }
    </div>
  )
}
