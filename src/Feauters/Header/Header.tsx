import styles from "./Header.module.scss";

import React, {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/customHook";
import {EditableSpan} from "../../Main/common/components/EditableSpan/EditableSpan";
import {changeStatus} from "../../store/reducer/formReducer";


export const Header = () => {
    const userName = useAppSelector<string>(state => state.app.name)
    const userStatus = useAppSelector<string>(state => state.app.status)
    const dispatch = useAppDispatch()
    const onChangeStatus = useCallback((text: string): void => {
        dispatch(changeStatus(text))
    }, [dispatch])

    return (
        <div className={styles.header}>
            <div className={styles.header_hello}>
                <h2>Здравствуйте, <span>{userName}</span></h2>
            </div>
            <EditableSpan changeStatus={onChangeStatus} status={userStatus}/>
        </div>
    )
}