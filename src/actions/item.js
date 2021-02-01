import { GET_ITEMS } from "../constants/actions"

export function getAll(params) {
  return {
    type: GET_ITEMS,
    params
  }
}