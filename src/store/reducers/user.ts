interface IUser {
  id: string
  name: string
  nickname: string
}

interface IState {
  user: IUser
}

const initUserState: IState = {
  user: {
    id: 'abc1231',
    name: "zhangsan",
    nickname: "法外狂徒"
  }
}

const user = (state: IState = initUserState, action: any) => {
  return state
}

export default user

