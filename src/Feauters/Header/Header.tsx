import styles from "./Header.module.scss";
import {EditableSpan} from "../../Main/common/components/EditableSpan/EditableSpan";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../utils/customHook";
import {changeStatus} from "../../store/reducer/formReducer";


export const Header = () => {
    const userName = useAppSelector<string>(state => state.app.name)
    const userStatus = useAppSelector<string>(state => state.app.status)
    const dispatch = useAppDispatch()

    const onChangeStatus = (text:string) => {
        dispatch(changeStatus(text))
    }

    return (
        <div className={styles.header}>
            <div className={styles.header_hello}>
                <h2>Здравствуйте, <span>{userName}</span></h2>
            </div>
            <EditableSpan onChangeStatus={onChangeStatus} status={userStatus}/>
        </div>
    )
}