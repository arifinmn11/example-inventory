import { all } from "redux-saga/effects";
import { watchFindAllUnit, watchFindUnitById, watchRemoveByid, watchUpdateUnit } from "./unit";

export default function* rootSaga() {
  yield all([
    watchFindAllUnit(), watchFindUnitById(), watchRemoveByid(), watchUpdateUnit()
  ])
}