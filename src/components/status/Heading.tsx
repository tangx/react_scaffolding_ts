import React from 'react'

type HeadingProps = {
  /** 只能使用 children ??? */
  children: string
}
export default function Heading(props: HeadingProps) {
  return (
    <div>
      <h3 style={{ color: 'skyblue' }}>Heading: 内容传递</h3>
      <h4>{props.children}</h4>
    </div>
  )
}
