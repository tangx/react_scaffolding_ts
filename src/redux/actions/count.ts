


import { EnumCount, ICount } from '../reducers/count'


export interface ICountAction {
  type: EnumCount,
  data: ICount,
}

export function increment(data: ICount): ICountAction {
  return {
    type: EnumCount.INCREMENT,
    data: data,
  }
}



