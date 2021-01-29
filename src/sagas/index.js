import { all } from "redux-saga/effects";
import { watchFindAllUnit, watchFindUnitById, watchRemoveByid, watchSaveUnit, watchUpdateUnit } from "./unit";

export default function* rootSaga() {
  yield all([
    watchFindAllUnit(), watchFindUnitById(), watchRemoveByid(), watchUpdateUnit(), watchSaveUnit()
  ])
}