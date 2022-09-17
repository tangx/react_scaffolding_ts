import React from 'react'
import Heading from './status/Heading'
import Oscar from './status/Oscar'


type StatusProps = {
  /* 约束组合类型， 这种情况下， 不能传递之外的值 */
  status: 'loading' | 'success' | 'error'
}
export default function Status(props: StatusProps) {
  let message

  if (props.status === 'loading') {
    message = 'Loading'
  } else if (props.status === 'success') {
    message = 'Data fetched successfully'
  } else if (props.status === 'error') {
    message = 'Error fetching data'
  }

  return (
    <div>
      <hr />
      <h2 style={{ color: 'blue' }}>4. Status: 类型约束 与 ReactNode 节点传递 </h2>
      <h4>Status: - {message}</h4>
      <Heading>Placeholder text from status</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
    </div>
  )
}
