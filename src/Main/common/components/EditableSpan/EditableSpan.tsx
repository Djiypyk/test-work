import React, {ChangeEvent, FC, KeyboardEvent, memo, useState} from "react";
import styles from './EditableSpan.module.scss'

type EditableStatus = {
    status: string
    changeStatus: (text: string) => void
}
export const EditableSpan: FC<EditableStatus> = memo(({status, changeStatus}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>(status)
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
        changeStatus(newStatus)
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