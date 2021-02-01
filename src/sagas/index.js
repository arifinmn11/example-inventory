import { all } from "redux-saga/effects";
import { watchFindAllUnit, watchFindUnitById, watchRemoveByid, watchSaveUnit, watchUpdateUnit } from "./unit";
import { watchGetItems } from "./item"

export default function* rootSaga() {
  yield all([
    watchFindAllUnit(), watchFindUnitById(), watchRemoveByid(), watchUpdateUnit(), watchSaveUnit(),
    watchGetItems()
  ])
}