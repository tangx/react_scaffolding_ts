import React from 'react'
import { connect } from 'react-redux'
import { rootStateType } from '../../redux/store'

import { ICount } from '../../redux/reducers/count'
import { IPeopleState, IPerson } from '../../redux/reducers/people'


interface PeopleProps {
  count: ICount,
  people: IPeopleState,
}

function People(props: PeopleProps) {
  return (
    <div>
      <h1>2. People 组件, 总人数: {props.people.length}</h1>
      <h2>Count 组件的和： {props.count} </h2>
      <h3>用户列表</h3>

      <ul>
        {
          props.people.map(
            (p: IPerson) => {
              return <li key={p.id}>{p.name} - {p.age}</li>
            }
          )
        }
      </ul>

    </div>
  )
}


const stateProps = (state: rootStateType) => {
  return {
    count: state.count,
    people: state.people,
  }
}

export default connect(stateProps)(People)
