import { delay } from "redux-saga/effects";
import { put, takeLatest } from "redux-saga/effects"
import {
  GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE
} from "../constants/actions"
import axios from "../configs/api"

function* getItems(params) {
  let uri = `/items?`
  // console.log(params.params)
  if (params.params) {
    uri += `page=${params.params.page}`
  }
  let result = yield axios.get(uri)
    .then(data => {
      return ({
        type: GET_ITEMS_SUCCESS,
        data: data
      })
    })
    .catch(err => {
      return ({
        type: GET_ITEMS_FAILURE,
        error: err
      })
    })
  console.log(result)
  yield put(result)
}

export function* watchGetItems() {
  yield takeLatest(GET_ITEMS, getItems)
}