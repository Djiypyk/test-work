import React, {useEffect} from 'react'

import styles from './App.module.scss'

import {Header} from "./Feauters/Header/Header";
import {Form} from "./Feauters/Form/Form";
import {useAppDispatch} from "./utils/customHook";
import {getUnisS} from "./store/saga/formSaga";

export const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUnisS())
    }, [dispatch])
    return (
        <div className={styles.app_container}>
            <Header/>
            <Form/>
        </div>)
}

export default App
