import {all} from 'redux-saga/effects'
import {UniWatcher} from "./formSaga";

export default function* rootSaga() {
    yield all([UniWatcher()])
}