
import React, { useState } from 'react'
import Item, { ItemProps } from './Item'
import './Logs.scss';

export default function Logs() {

  // const [items, setItems] = useState<ItemProps>({} as ItemProps)

  const items = [
    {
      date: new Date(2022, 8, 3, 15, 24, 0),
      title: "学习前端",
      time: "30min"
    },
    {
      date: new Date(2021, 3, 8, 12, 23, 23),
      title: "打篮球",
      time: "15min"
    },
  ] as ItemProps[]

  return (
    <div className='Logs'>
      {
        items.map((item) => { return <Item {...item} /> })
      }
    </div>
  )
}
