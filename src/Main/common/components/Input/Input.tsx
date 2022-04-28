import React, {FC, memo} from "react";
import styles from './Input.module.scss'
import {InputPropType} from "../../../../types/InputPropT";


export const Input: FC<InputPropType> =memo( props => {
    const {label, onClick, type, id, name, onChange, value, ...rest} = props
    return <input
        className={`${styles.input}  ${rest.error && styles.input_error}`}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={rest.onBlur}
        value={value}
        required={rest.required}/>
})