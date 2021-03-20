import { delay } from "redux-saga/effects";
import { put, takeLatest } from "redux-saga/effects"
import {
  GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE
} from "../constants/actions"
import axios from "../configs/api"
import { useHistory } from "react-router-dom"

function insertParam(key, value) {
  key = encodeURIComponent(key);
  value = encodeURIComponent(value);

  // kvp looks like ['key1=value1', 'key2=value2', ...]
  var kvp = document.location.search.substr(1).split('&');
  let i=0;

  for(; i<kvp.length; i++){
      if (kvp[i].startsWith(key + '=')) {
          let pair = kvp[i].split('=');
          pair[1] = value;
          kvp[i] = pair.join('=');
          break;
      }
  }

  if(i >= kvp.length){
      kvp[kvp.length] = [key,value].join('=');
  }

  // can return this or...
  let params = kvp.join('&');

  console.log(params)
  // reload page with new params
  // document.location.search = params;
}

function* getItems(action) {
  let uri = `/items?`
  if (action.params) {
    uri += `page=${action.params.page}`
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
  yield put(result)
}

export function* watchGetItems() {
  yield takeLatest(GET_ITEMS, getItems)
}