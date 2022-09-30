
import { combineReducers } from 'redux'


import count from './count'
import people from './people'

const reducers = combineReducers(
  {
    count,
    people,
  }
)

export default reducers