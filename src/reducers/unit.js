import {
  FIND_ALL_UNIT, FIND_ALL_UNIT_FAILURE, FIND_ALL_UNIT_SUCCESS,
  FIND_UNIT_BY_ID, FIND_UNIT_BY_ID_FAILURE, FIND_UNIT_BY_ID_SUCCESS,
  REMOVE_UNIT_BY_ID, REMOVE_UNIT_BY_ID_FAILURE, REMOVE_UNIT_BY_ID_SUCCESS,
  UPDATE_UNIT, UPDATE_UNIT_FAILURE, UPDATE_UNIT_SUCCESS
} from "../constants/actions"

import {
  findAll,
  findById,
  removeById,
  // updated,
} from "../services/unit"

const initialState = {
  data: null,
  isLoading: false,
  error: null
}


export const removeUnitById = (state = { ...initialState, data: false }, action) => {

  switch (action.type) {
    case REMOVE_UNIT_BY_ID:
      return {
        ...state,
        data: false,
        loading: true
      }
    case REMOVE_UNIT_BY_ID_SUCCESS:
      return {
        data: action.data,
        loading: true,
        error: null
      }
    default:
      return false;
  }

}

export const findUnitById = (state = {}, action) => {
  switch (action.type) {
    case FIND_UNIT_BY_ID_SUCCESS:
      return action.data;
    default:
      return state;
  }
}

export const findAllUnit = (state = initialState, action) => {
  switch (action.type) {
    case FIND_ALL_UNIT:
      return {
        ...state,
        isLoading: true
      }
    case FIND_ALL_UNIT_SUCCESS:
      return {
        data: action.data,
        isLoading: false,
        error: null
      };
    default:
      return state;
  }
}

export const updateUnit = (state = {}, action) => {

  switch (action.type) {
    case UPDATE_UNIT:
      console.log("updateing unit in reducres")
      return true
    case UPDATE_UNIT_SUCCESS:

      console.log("updateing success unit in reducres")
      return true
    default:
      return false;
  }
}