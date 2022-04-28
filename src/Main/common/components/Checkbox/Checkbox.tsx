import React, {FC, memo} from "react";
import styles from './Checkbox.module.scss'

type CheckboxT = {
    name: string
    checked: boolean
    onChange: (e: any) => void
    type: string
}
export const Checkbox: FC<CheckboxT> = memo(({name, checked, onChange, type}) => {

    return (
        <div className={`${styles.checkbox} ${checked ? styles.checkbox__active : ''}`}>
            <input name={'checkbox'} onChange={onChange} checked={checked}
                   type="checkbox"/>
        </div>
    )
})