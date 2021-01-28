import { act } from "react-dom/test-utils";
import {
  FIND_ALL_UNIT,
  FIND_UNIT_BY_ID,
  REMOVE_UNIT_BY_ID,
  UPDATE_UNIT
} from "../constants/actions"

import {
  findAll,
  findById,
  removeById,
  updated,
} from "../services/unit"


export const removeUnitById = (state, action) => {

  switch (action.type) {
    case REMOVE_UNIT_BY_ID:
      return removeById(action.id);
    default:
      return false;
  }

}

export const findUnitById = (state = {}, action) => {
  switch (action.type) {
    case FIND_UNIT_BY_ID:
      return findById(action.id);
    default:
      return state;
  }
}

export const findAllUnit = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_UNIT:
      return findAll();
    default:
      return state;
  }
}

export const updateUnit = (state = {}, action) => {
  
  switch (action.type) {
    
    case UPDATE_UNIT:
      updated(action.payload)
      return true
    default:

      console.log("test", action.payload)
      return false;
  }
}