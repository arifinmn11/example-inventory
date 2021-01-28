import { delay } from "redux-saga/effects";
import { put, takeEvery } from "redux-saga/effects"
import {
  FIND_ALL_UNIT, FIND_ALL_UNIT_FAILURE, FIND_ALL_UNIT_SUCCESS,
  FIND_UNIT_BY_ID, FIND_UNIT_BY_ID_FAILURE, FIND_UNIT_BY_ID_SUCCESS,
  REMOVE_UNIT_BY_ID, REMOVE_UNIT_BY_ID_FAILURE, REMOVE_UNIT_BY_ID_SUCCESS, UPDATE_UNIT, UPDATE_UNIT_SUCCESS
} from "../constants/actions"

const data = [
  {
    id: 1,
    code: "x",
    description: "X"
  },
  {
    id: 2,
    code: "y",
    description: "Y"
  },
  {
    id: 3,
    code: "z",
    description: "Z"
  }
]


function* findUnitById(action) {
  let result = null
  for (let e of data) {
    if (e.id === parseInt(action.id)) {
      result = e;
      break;
    }
  }
  yield put({
    type: FIND_UNIT_BY_ID_SUCCESS,
    data: result
  })
}

function* updateUnit(action) {
  let result = false
  console.log("sagas", action.payload)
  for (let i in data) {
    let e = data[i]
    if (e.id === parseInt(action.payload.id)) {
      data[i] = action.payload
      result = true
    }
  }
  yield put({
    type: UPDATE_UNIT_SUCCESS,
    data: result
  })
}


function* findAllUnit() {
  yield delay(2000)
  yield put({
    type: FIND_ALL_UNIT_SUCCESS,
    data: data
  })
}

function* removeUnitById(action) {
  let result = false
  for (let i in data) {
    let e = data[i]
    if (e.id === action.id) {
      data.splice(i, 1)
      result = true;
    }
  }
  yield put({
    type: REMOVE_UNIT_BY_ID_SUCCESS,
    data: result
  })
}

export function* watchRemoveByid() {
  yield takeEvery(REMOVE_UNIT_BY_ID, removeUnitById)
}

export function* watchFindUnitById() {
  yield takeEvery(FIND_UNIT_BY_ID, findUnitById)
}

export function* watchFindAllUnit() {
  yield takeEvery(FIND_ALL_UNIT, findAllUnit)
}

export function* watchUpdateUnit() {
  yield takeEvery(UPDATE_UNIT, updateUnit)
}