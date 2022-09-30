import { IPerson } from "../reducers/people";

export enum EnumPeopleActionType {
  ADD_USER = "ADD_USER"
}


export function addPerson(person: IPerson) {
  return {
    type: EnumPeopleActionType.ADD_USER,
    data: person,
  }
}