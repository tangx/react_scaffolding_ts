import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { rootStateType } from '../../redux/store'

import { nanoid } from 'nanoid'

import { ICount } from '../../redux/reducers/count'
import { IPeopleState, IPerson } from '../../redux/reducers/people'

import { addPerson } from '../../redux/actions/people'


interface PeopleProps {
  count: ICount,
  people: IPeopleState,

  addPerson: (person: IPerson) => void,
}

function People(props: PeopleProps) {

  const nameNode = createRef<HTMLInputElement>()
  const ageNode = createRef<HTMLInputElement>()

  const addPerson = () => {
    // const name = (nameNode.current as HTMLInputElement).value
    const name = nameNode.current!.value
    const age = ageNode.current!.valueAsNumber

    const p: IPerson = {
      id: nanoid(),
      name,
      age,
    }

    props.addPerson(p)
  }

  return (
    <div>
      <h1>2. People 组件, 总人数: {props.people.length}</h1>
      <h2>Count 组件的和： {props.count} </h2>
      <h3>用户列表</h3>
      <input type="text" placeholder='用户名' ref={nameNode} />
      {/* 注意这里年龄 input 的 type 是 number */}
      <input type="number" placeholder='年纪' ref={ageNode} />
      <button onClick={addPerson}>添加用户</button>
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


const mapStateToProps = (state: rootStateType) => {
  return {
    count: state.count,
    people: state.people,
  }
}

const mapDispatchToProps = {
  addPerson,
}

export default connect(mapStateToProps, mapDispatchToProps)(People)
