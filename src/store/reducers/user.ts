export interface IUser {
  id: string
  name: string
  nickname: string
}

interface IUserState {
  user: IUser
}

const initUserState: IUserState = {
  user: {
    id: 'abc1231',
    name: "zhangsan",
    nickname: "法外狂徒"
  }
}

const user = (state: IUserState = initUserState, action: any) => {
  return state
}

export default user

