import React, {FC} from "react";
import styles from './Button.module.scss'

export type ButtonPropsT = {
    value: string
    type: "button" | "submit" | "reset" | undefined
}

export const Button: FC<ButtonPropsT> = ({value, type}) => {
    return (
        <button className={styles.btn} type={type}>{value}</button>
    )
}