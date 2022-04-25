import styles from "./Header.module.scss";
import {EditableStatus} from "../../Main/common/components/EditableSpan/EditableStatus";
import React from "react";
import {useAppSelector} from "../../utils/customHook";


export const Header = () => {
    const userName = useAppSelector<string>(state => state.app.name)
    return (
        <div className={styles.header}>
            <div className={styles.header_hello}>
                <h2>Здравствуйте, <span>{userName}</span></h2>
            </div>
            <EditableStatus/>
        </div>
    )
}