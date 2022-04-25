import React from 'react'

import styles from './App.module.scss'

import {Header} from "./Feauters/Header/Header";
import {Form} from "./Feauters/Form/Form";



export const App = () => {

    return (
        <div className={styles.app_container}>
            <Header/>
            <Form/>
        </div>)
}

export default App
