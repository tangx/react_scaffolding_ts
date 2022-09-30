
interface IAdmin {
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

const admin = (state: IAdminState = initAdminState, action: any) => {
  return state
}

export default admin