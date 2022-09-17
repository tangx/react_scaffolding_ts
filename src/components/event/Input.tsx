import React, { HTMLInputTypeAttribute } from 'react'

type InputProps = {
  value?: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("local", event);
  }

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log("keyup", event);

    if (event.code !== 'Enter') {
      return
    }

    /** 获取 target 对象 */
    const target = event.target as HTMLInputElement
    /** 输出 target 对象值并清空 */
    console.log(target.value);
    target.value = ''

  }

  return (
    <div>
      <input type="text" value={props.value}
        placeholder='输入内容， 回车打印'
        // onChange={handleInputChange}
        onKeyUp={handleOnKeyUp}
      />
    </div>
  )
}
