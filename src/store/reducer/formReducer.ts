import {filterCities} from "../../utils/cities";

const initialState = {
    name: 'Человек №3596941',
    status: 'Прежде чем действовать, надо понять',
    cities: filterCities
}

export const formReducer = (state: InitialStateType = initialState, action: ActionsType,): InitialStateType => {
    switch (action.type) {
        case "CHANGE-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

//AC
export const changeStatus = (status: string) => ({type: 'CHANGE-STATUS', status} as const)

// Types
type ActionsType =
    | ReturnType<typeof changeStatus>

export type NullableType<T> = null | T
type InitialStateType = typeof initialState
