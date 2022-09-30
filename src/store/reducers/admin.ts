
interface IAdmin {
  id: string
  name: string
  role: string
}

interface IState {
  admin: IAdmin
}

const initAdminState: IState = {
  admin: {
    id: 'admin123',
    name: 'admin',
    role: "超级管理员"
  }
}

const admin = (state: IState = initAdminState, action: any) => {
  return state
}

export default admin