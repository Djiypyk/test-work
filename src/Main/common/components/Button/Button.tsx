import React, {FC, memo} from "react";
import styles from './Button.module.scss'

export type ButtonPropsT = {
    value: string
    type: "button" | "submit" | "reset" | undefined
}

export const Button: FC<ButtonPropsT> = memo(({value, type}) => {
    return (
        <button className={styles.btn} type={type}>{value}</button>
    )
})