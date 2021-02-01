import {
  GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE
} from "../constants/actions"

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  params: {}
}

export const getItems = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      console.log("GET ITEMS")
      return {
        ...state,
        isLoading: true
      }
    case GET_ITEMS_SUCCESS:
      return {
        data: action.data,
        isLoading: false,
        error: null
      };
    case GET_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return {
        ...state,
        isLoading: false,
        error: null
      };
  }
}