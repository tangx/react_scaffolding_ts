import React from 'react'

type OscarProps = {
  children: React.ReactNode
}
export default function Oscar(props: OscarProps) {
  return (
    <div>
      <h3 style={{ color: 'skyblue' }}>Oscar: ReactNode 节点传递</h3>
      <h4>{props.children}</h4>
    </div>
  )
}
