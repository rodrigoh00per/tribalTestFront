import { all, call } from "redux-saga/effects";
import BusinessSagas from "./Business/Business.sagas";


export default function* rootSaga() {
  yield all([
    call(BusinessSagas),
  ]);
}
