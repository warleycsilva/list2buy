import { ADD_LIST_ITEM, DELETE_LIST_ITEM } from "../types";

export const AddListItem = payload => ({type: ADD_LIST_ITEM, payload});
export const RemoveListItem = payload => ({type: DELETE_LIST_ITEM, payload});
