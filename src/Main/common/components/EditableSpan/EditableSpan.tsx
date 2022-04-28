// import React, {ChangeEvent, FC, memo} from "react";
// import styles from './EditableSpan.module.scss'
//
// type EditableSpan = {
//     setNewStatus: (text: string) => void
//     status: string
//     editMode: boolean
// }
// export const EditableSpan: FC<EditableSpan> = memo(({status, editMode, setNewStatus,}) => {
//     const onChangeNewStatus = (e: ChangeEvent<HTMLInputElement>) => {
//         setNewStatus(e.currentTarget.value)
//     }
//     return (
//         <div>
//             {editMode ?
//                 <div>
//                     <div className={styles.status_message}>
//                         <input autoFocus type="text"
//                                value={status}
//                                onChange={onChangeNewStatus}
//                         />
//                     </div>
//                 </div>
//                 :
//                 <div>
//                     <div className={styles.status_message}>
//                         <p>{status}</p>
//                     </div>
//                 </div>}
//         </div>
//     )
// })
import React, {ChangeEvent, FC, KeyboardEvent, memo, useState} from "react";
import styles from './EditableSpan.module.scss'
import {changeStatus} from "../../../../store/reducer/formReducer";
import {useAppDispatch} from "../../../../utils/customHook";

type EditableStatus = {
    status: string
}
export const EditableStatus: FC<EditableStatus> = memo(({status}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>(status)
    const dispatch = useAppDispatch()

    const onChangeNewStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }
    const onEditMode = (): void => {
        setEditMode(true)
    }
    const offEditMode = (): void => {
        setEditMode(false)
    }
    const onChangeStatus = (): void => {
        dispatch(changeStatus(newStatus))
        offEditMode()
    }
    const onKeyPressChangeStatus = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && onChangeStatus()
    }
    return (
        <div>
            {
                editMode ?
                    <div className={styles.status_block}>
                        <div className={styles.status_message}>
                            <input autoFocus type="text"
                                   value={newStatus}
                                   onChange={onChangeNewStatus}
                                   onKeyPress={(e) => onKeyPressChangeStatus(e)}
                            />
                            <button className={styles.status_btn} onClick={onChangeStatus}>Подтвердить</button>
                        </div>
                    </div>
                    :
                    <div className={styles.status_block}>
                        <div className={styles.status_message}>
                            <p>{status}</p>
                            <button className={styles.status_btn} onClick={onEditMode}>Сменить статус</button>
                        </div>
                    </div>

            }


        </div>
    )
})