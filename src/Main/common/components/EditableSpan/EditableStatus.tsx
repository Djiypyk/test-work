import {useAppDispatch, useAppSelector} from "../../../../store/config/index";
import React, {ChangeEvent, memo, useState} from "react";
import styles from './EditableStatus.module.scss'
import {changeStatus} from "../../../../store/reducer/formReducer";

export const EditableStatus = memo(() => {
    const userStatus = useAppSelector<string>(state => state.app.status)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>(userStatus)
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

    return (
        <div>
            {
                editMode ?
                        <div className={styles.status_block}>
                            <div className={styles.status_message}>
                                <input autoFocus type="text"
                                       value={newStatus}
                                       onChange={onChangeNewStatus}
                                />
                                <button className={styles.status_btn} onClick={onChangeStatus}>Подтвердить</button>
                            </div>
                        </div>
                    :
                    <div className={styles.status_block}>
                        <div className={styles.status_message}>
                            <p>{userStatus}</p>
                            <button className={styles.status_btn} onClick={onEditMode}>Сменить статус</button>
                        </div>
                    </div>

            }


        </div>
    )
})