import React from 'react'
import { connect } from 'react-redux'
import { rootStateType } from '../../redux/store'
import { ICount } from '../../redux/reducers/count'

interface CountProps {
  count: ICount
}

/** Count 的 UI 组件 */
function Count(props: CountProps) {
  return (
    <div>
      <h2>1. Count 组件</h2>
      <h3>求和总数为: {props.count}</h3>
      <button>再 +1</button>
      <button>和为奇数 +1</button>
      <button>延迟 +1</button>
    </div>
  )
}



/** Count 的 Redux-Container 组件 */

// 数值 state
const stateProps = (state: rootStateType) => {
  return {
    count: state.count
  }
}
// 方法 action
const dispatchProps = {

}

export default connect(stateProps, dispatchProps)(Count)
