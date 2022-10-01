import React, { createRef, useCallback } from 'react'
import { connect, useSelector } from 'react-redux'
import { rootStateType } from '../../redux/store'

import { nanoid } from 'nanoid'

import { ICount } from '../../redux/reducers/count'
import { IPeopleState, IPerson } from '../../redux/reducers/people'

import { addPerson } from '../../redux/actions/people'
import { useDispatch } from 'react-redux'


interface PeopleProps {
  // count: ICount,
  // people: IPeopleState,

  // addPerson: (person: IPerson) => void,
}

function People(props: PeopleProps) {

  // https://react-redux.js.org/api/hooks#useselector

  // const selectXX = (state: rootStateType) => state.people
  // const persons = useSelector(selectXX)
  const people = useSelector((state: rootStateType) => state.people)
  const count = useSelector((state: rootStateType) => state.count)

  const nameNode = createRef<HTMLInputElement>()
  const ageNode = createRef<HTMLInputElement>()

  const dispatch = useDispatch()
  const handleAddPerson = () => {

    const name = nameNode.current!.value
    const age = ageNode.current!.valueAsNumber

    const p: IPerson = {
      id: nanoid(),
      name,
      age,
    }

    dispatch(addPerson(p))
  }

  return (
    <div>
      <h1>2. People 组件, 总人数: {people.length}</h1>
      <h2>Count 组件的和： {count} </h2>
      <h3>用户列表</h3>
      <input type="text" placeholder='用户名' ref={nameNode} />
      {/* 注意这里年龄 input 的 type 是 number */}
      <input type="number" placeholder='年纪' ref={ageNode} />
      <button onClick={handleAddPerson}>添加用户</button>
      <ul>
        {
          people.map(
            (p: IPerson) => {
              return <li key={p.id}>{p.name} - {p.age}</li>
            }
          )
        }
      </ul>

    </div>
  )
}


// const mapStateToProps = (state: rootStateType) => {
//   return {
//     // count: state.count,
//     // people: state.people,
//   }
// }

// const mapDispatchToProps = {
//   addPerson,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(People)

export default People