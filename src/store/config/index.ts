import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {formReducer} from "../reducer/formReducer";
import rootSaga from "../saga/index";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    app: formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

//type

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
