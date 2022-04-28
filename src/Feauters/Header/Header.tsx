// import styles from "./Header.module.scss";
// import {EditableSpan} from "../../Main/common/components/EditableSpan/EditableSpan";
// import React, {KeyboardEvent, useCallback, useState} from "react";
// import {useAppDispatch, useAppSelector} from "../../utils/customHook";
// import {changeStatus} from "../../store/reducer/formReducer";
//
//
// export const Header = () => {
//     const userName = useAppSelector<string>(state => state.app.name)
//     const userStatus = useAppSelector<string>(state => state.app.status)
//     const dispatch = useAppDispatch()
//     const [newStatus, setNewStatus] = useState<string>(userStatus)
//     const [editMode, setEditMode] = useState<boolean>(false)
//     const onChangeEditMode = (): void => {
//         setEditMode(boolean => !boolean)
//     }
//     const onChangeStatus = useCallback(() => {
//         onChangeEditMode()
//         dispatch(changeStatus(newStatus))
//     }, [])
//
//     return (
//         <div className={styles.header}>
//             <div className={styles.header_hello}>
//                 <h2>Здравствуйте, <span>{userName}</span></h2>
//                 {editMode ? <button className={styles.status_btn} onClick={onChangeStatus}>Подтвердить</button> :
//                     <button className={styles.status_btn} onClick={onChangeEditMode}>Сменить статус</button>}
//             </div>
//             <div className={styles.status_block}>
//                 <EditableSpan setNewStatus={setNewStatus} editMode={editMode} status={newStatus}/>
//             </div>
//         </div>
//     )
// }


import styles from "./Header.module.scss";

import React from "react";
import {useAppSelector} from "../../utils/customHook";
import {EditableStatus} from "../../Main/common/components/EditableSpan/EditableSpan";


export const Header = () => {
    const userName = useAppSelector<string>(state => state.app.name)
    const userStatus = useAppSelector<string>(state => state.app.status)
    return (
        <div className={styles.header}>
            <div className={styles.header_hello}>
                <h2>Здравствуйте, <span>{userName}</span></h2>
            </div>
            <EditableStatus status={userStatus}/>
        </div>
    )
}