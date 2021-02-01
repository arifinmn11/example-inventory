import { combineReducers } from "redux"
import { findAllUnit, findUnitById, removeUnitById, updateUnit, saveUnit } from "./unit"
import { getItems } from "./item"

const rootReducer = combineReducers({
  // UNITS
  findAllUnit,
  findUnitById,
  removeUnitById,
  updateUnit,
  saveUnit,
  
  // ITEMS
  getItems
})

export default rootReducer