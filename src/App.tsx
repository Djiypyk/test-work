import React from 'react'

import styles from './App.module.scss'
import {Form} from "./Feauters/Form";


export const App = () => {

    return (
        <div className={styles.app_container}>
            <Form/>
        </div>)
}

export default App
