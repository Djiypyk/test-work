import {changeStatus, getUni, setLastUpdateDate} from "../store/reducer/formReducer";
export type UserT = {
    password: string
    email: string
    agree: boolean
}
export type ActionsFormReducerT =
    | ReturnType<typeof changeStatus>
    | ReturnType<typeof getUni>
    | ReturnType<typeof setLastUpdateDate>