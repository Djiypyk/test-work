import React, {ChangeEvent, FC, KeyboardEvent, memo, useState} from "react";
import styles from './EditableSpan.module.scss'

type EditableSpan = {
    status: string
    onChangeStatus: (text: string) => void
}
export const EditableSpan: FC<EditableSpan> = memo(({status, onChangeStatus}) => {
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
    const onChange = (): void => {
        onChangeStatus(newStatus)
        offEditMode()
    }
    const onKeyPressChangeStatus = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && onChange()
    }
    return (
        <div>
            {
                editMode ?
                    <div className={styles.status_block}>
                        <button className={styles.status_btn} onClick={onChange}>Подтвердить</button>
                        <div className={styles.status_message}>
                            <input autoFocus type="text"
                                   value={newStatus}
                                   onChange={onChangeNewStatus}
                                   onKeyPress={(e) => onKeyPressChangeStatus(e)}
                            />

                        </div>
                    </div>
                    :
                    <div className={styles.status_block}>
                        <button className={styles.status_btn} onClick={onEditMode}>Сменить статус</button>
                        <div className={styles.status_message}>
                            <p>{status}</p>

                        </div>
                    </div>
            }
        </div>
    )
})