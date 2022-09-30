import { EnumPeopleActionType } from '../actions/people'

export interface IPerson {
  id: string,
  name: string,
  age: number,
}

export type IPeopleState = IPerson[]

interface IPeopleAction {
  type: EnumPeopleActionType,
  data: IPerson,
}

const initState: IPeopleState = [
  {
    id: "user111",
    name: "zhangsan",
    age: 18,
  }
]
export default function people(preState: IPeopleState = initState, action: IPeopleAction) {

  switch (action.type) {
    case EnumPeopleActionType.ADD_USER:
      return [action.data, ...preState]
    default:
      return preState
  }
}