import {call, put, takeEvery} from 'redux-saga/effects'
import {AxiosResponse} from "axios";
import {getUniT, uniApi} from "../../API/uniApi";
import {getUni} from "../reducer/formReducer";
import {SagaIterator} from "redux-saga";

function* UniWorker() {
    const res: AxiosResponse<getUniT[]> = yield call(uniApi.getUni)
    yield put(getUni(res.data))
}

export function* UniWatcher(): SagaIterator {
    yield takeEvery('SET_UNI', UniWorker)
}

export const getUnisS = () => ({type: 'SET_UNI'} as const)