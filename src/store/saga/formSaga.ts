import {call, put, takeEvery} from 'redux-saga/effects'
import {AxiosError, AxiosResponse} from "axios";

import {getUni} from "../reducer/formReducer";
import {SagaIterator} from "redux-saga";
import {SagaActions} from "../../enum/SagaActions";
import {getUniT} from "../../types/UniT";
import {uniApi} from "../../API/uniApi";

function* UniWorker() {
    try {
        const res: AxiosResponse<getUniT[]> = yield call(uniApi.getUni)
        yield put(getUni(res.data))
    } catch (e) {
        console.warn((e as AxiosError))
    }
}

export function* UniWatcher(): SagaIterator {
    yield takeEvery(SagaActions.SetUni, UniWorker)
}
export const getUnisS = () => ({type: SagaActions.SetUni} as const)