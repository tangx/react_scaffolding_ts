import React from 'react'
import { connect } from 'react-redux'

function Count() {
  return (
    <div>
      <h2>1. Count 组件</h2>
      <h3>求和总数为: ???/</h3>
      <button>再 +1</button>
      <button>和为奇数 +1</button>
      <button>延迟 +1</button>
    </div>
  )
}


const stateProps = () => {
  return {}
}
const dispatchProps = {

}

export default connect(stateProps, dispatchProps)(Count)
