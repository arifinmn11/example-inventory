import { combineReducers } from "redux"
import { findAllUnit, findUnitById, removeUnitById, updateUnit } from "./unit"

const rootReducer = combineReducers({
  findAllUnit,
  findUnitById,
  removeUnitById,
  updateUnit
})

export default rootReducer