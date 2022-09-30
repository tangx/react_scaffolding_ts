


export enum EnumCount {
  INCREMENT,
  DECREMENT,
}


type ICount = number

interface ICountAtcion {
  type: EnumCount,
  data: number,
}

// 初始化 count reducer
const initState: ICount = 1
function count(preState: ICount = initState, action: ICountAtcion): number {
  switch (action.type) {
    case EnumCount.INCREMENT:
      return preState + action.data
    case EnumCount.DECREMENT:
      return preState - action.data
    default:
      return preState
  }
}

export default count