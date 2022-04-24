import {call, put, takeEvery} from 'redux-saga/effects'

function* SagaWorker() {

}

export function* SagaWatcher() {
    yield takeEvery('', SagaWorker)
}