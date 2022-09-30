import React from 'react'
import { connect } from 'react-redux'
import { ICount } from '../../redux/reducers/count'
import { rootStateType } from '../../redux/store'


interface PeopleProps {
  count: ICount,
}

function People(props: PeopleProps) {
  return (
    <div>
      <h1>2. People 组件</h1>
      <h2>Count 组件的和： {props.count} </h2>
    </div>
  )
}


const stateProps = (state: rootStateType) => {
  return {
    count: state.count,
  }
}

export default connect(stateProps)(People)
