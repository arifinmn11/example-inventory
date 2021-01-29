import { combineReducers } from "redux"
import { findAllUnit, findUnitById, removeUnitById, updateUnit, saveUnit } from "./unit"

const rootReducer = combineReducers({
  findAllUnit,
  findUnitById,
  removeUnitById,
  updateUnit,
  saveUnit
})

export default rootReducer