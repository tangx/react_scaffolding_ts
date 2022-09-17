import React from 'react'

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export default function Button(props: ButtonProps) {
  return (
    <div>
      <hr />
      <h2>Button: Event 事件传递</h2>
      <button
        onClick={(event) => { props.handleClick(event, 1) }}
      >Click</button>
    </div>
  )
}
