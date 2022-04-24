import {useAppDispatch, useAppSelector} from "../../../../store/config/index";
import React, {ChangeEvent, useState} from "react";
import styles from './EditableStatus.module.scss'
import {changeStatus} from "../../../../store/reducer/formReducer";


export const EditableStatus = () => {
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
        offEditMode()
        dispatch(changeStatus(newStatus))
    }

    return (
        <div>
            {
                editMode ? <div className={styles.status_hello}>
                        <input autoFocus type="text"
                               value={newStatus}
                               onChange={onChangeNewStatus}
                               onBlur={offEditMode}/>
                        <button onClick={onChangeStatus}>Подтвердить смену статуса</button>
                    </div>
                    :
                    <div className={styles.status_hello}>
                        <h2>Здравствуйте, <span>{userStatus}</span></h2>
                        <button className={styles.status_btn} onClick={onEditMode}>Сменить статус</button>
                    </div>

            }
            <div className={styles.status_message}>
                <p>Прежде чем действовать, надо понять</p>
            </div>

        </div>
    )
}