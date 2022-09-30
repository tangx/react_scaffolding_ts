import { EnumAdminAction } from "../constant";
import { IAdmin } from "../reducers/admin";


export type IAdminAction = {
  type: EnumAdminAction,
  payload: any,
}

export function changeAdminName(admin: IAdmin): IAdminAction {
  return {
    type: EnumAdminAction.CHANGE_NAME,
    payload: admin,
  }
}

