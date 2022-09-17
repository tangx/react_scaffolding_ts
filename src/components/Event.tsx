import React from 'react'
import Button from './event/Button'
import Input from './event/Input'

export default function Event() {
  return (
    <div>
      <hr /><hr />
      <h2>Event</h2>
      <Button handleClick={(event, id) => {
        console.log('Button Click', event, "id=", id);
      }}
      />
      <hr />
      <Input
        handleChange={(event) => {
          console.log(event);
        }}
      />
    </div>
  )
}
