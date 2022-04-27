import {CitiesT, sortCities} from "../../utils/cities";
import obj from '../../Main/common/cities.json'
import {getUniT} from "../../API/uniApi";
import {ActionsFormReducerT, UserT} from "../../types/formReducer";

const cities = sortCities(obj)
const initialState = {
    name: 'Человек №3596941',
    status: 'Прежде чем действовать, надо понять',
    cities: cities as CitiesT[],
    unis: [] as getUniT[],
    arrayUniName: [] as string[],
    user: {
        password: '',
        email: '',
        agree: false,
    } as UserT,
    lastUpdateForm: '2 Апреля 2022 в 23:15:12'
}

export const formReducer = (state: InitialStateFormReducerT = initialState, action: ActionsFormReducerT,): InitialStateFormReducerT => {
    switch (action.type) {
        case "CHANGE-STATUS":
            debugger
            return {...state, status: action.status}
        case 'GET_UNI':
            return {...state, unis: action.data, arrayUniName: action.data.map(u => u.name)}
        case "SET_LAST_UPDATE_DATE":
            return {...state, lastUpdateForm: action.date}
        default:
            return state
    }
}

//AC
export const changeStatus = (status: string) => ({type: 'CHANGE-STATUS', status} as const)
export const getUni = (data: getUniT[]) => ({type: 'GET_UNI', data} as const)
export const setLastUpdateDate = (date: string) => ({type: 'SET_LAST_UPDATE_DATE', date} as const)

// Types
type InitialStateFormReducerT = typeof initialState