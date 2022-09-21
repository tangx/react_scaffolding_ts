import React from 'react';
import './Item.scss';

export type ItemProps = {
  date: Date
  title: string
  time: string
}
export default function Item(props: ItemProps) {
  const month = props.date.toLocaleString('zh-CN', { month: 'long' })
  const date = props.date.getDate()
  return (
    <div className='Item'>
      <div className="left">
        <div className="month">{month}</div>
        <div className="date">{date}</div>
      </div>
      <div className="right">
        <div className="title">{props.title}</div>
        <div className="time">{props.time}</div>
      </div>
      {/* <hr /> */}
    </div>
  )
}
