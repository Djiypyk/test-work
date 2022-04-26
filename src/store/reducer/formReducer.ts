import {filterCities} from "../../utils/cities";
import {getUniT} from "../../API/uniApi";

const initialState = {
    name: 'Человек №3596941',
    status: 'Прежде чем действовать, надо понять',
    cities: filterCities,
    unis: [] as getUniT[],
    arrayUniName: [] as string[],
    user: {
        password: '',
        email: '',
    }
}

export const formReducer = (state: InitialStateType = initialState, action: ActionsType,): InitialStateType => {
    switch (action.type) {
        case "CHANGE-STATUS":
            return {...state, status: action.status}
        case 'GET_UNI':
            return {...state, unis: action.data, arrayUniName: action.data.map(u => u.name)}

        default:
            return state
    }
}
//AC
export const changeStatus = (status: string) => ({type: 'CHANGE-STATUS', status} as const)
export const getUni = (data: getUniT[]) => ({type: 'GET_UNI', data} as const)

// Types
type ActionsType =
    | ReturnType<typeof changeStatus>
    | ReturnType<typeof getUni>
type InitialStateType = typeof initialState
