import {filterCities} from "../../utils/cities";
import {getUniT} from "../../API/uniApi";

const initialState = {
    name: 'Человек №3596941',
    status: 'Прежде чем действовать, надо понять',
    cities: filterCities,
    uni: {} as getUniT
}

export const formReducer = (state: InitialStateType = initialState, action: ActionsType,): InitialStateType => {
    switch (action.type) {
        case "CHANGE-STATUS":
            return {...state, status: action.status}
        case 'GET_UNI':
            return {...state, uni: action.data}
        default:
            return state
    }
}

//AC
export const changeStatus = (status: string) => ({type: 'CHANGE-STATUS', status} as const)
export const getUni = (data: getUniT) => ({type: 'GET_UNI', data} as const)

// Types
type ActionsType =
    | ReturnType<typeof changeStatus>
    | ReturnType<typeof getUni>

export type NullableType<T> = null | T
type InitialStateType = typeof initialState
