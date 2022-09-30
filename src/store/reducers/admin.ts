import { changeAdminName, IAdminAction } from '../actions/admin'
import { EnumAdminAction } from '../constant'

export interface IAdmin {
  id: string
  name: string
  role: string
}

interface IAdminState {
  admin: IAdmin
}

const initAdminState: IAdminState = {
  admin: {
    id: 'admin123',
    name: 'admin',
    role: "超级管理员"
  }
}

const adminReducer = (preState: IAdminState = initAdminState, action: IAdminAction) => {
  switch (action.type) {
    case EnumAdminAction.CHANGE_NAME:
      return { admin: { ...action.payload } }
    default:
      return preState
  }
}

export default adminReducer