import {call, put, takeEvery} from 'redux-saga/effects'
import {AxiosResponse} from "axios";
import {getUniT, uniApi} from "../../API/uniApi";
import {getUni} from "../reducer/formReducer";

function* UniWorker() {
    const res: AxiosResponse<getUniT> = yield call(uniApi.getUni)
    yield put(getUni(res.data))
    debugger
    console.log(res)
}

export function* SagaWatcher() {
    yield takeEvery('GET_UNI', UniWorker)
}

export const getUnisS = () => ({type: 'GET_UNI'} as const)