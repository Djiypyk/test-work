import axios, {AxiosResponse} from "axios";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://universities.hipolabs.com/search?country=United+Kingdom/allow-cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }

})

export const uniApi = {
    getUni() {
        return axiosInstance.get<AxiosResponse<getUniT[]>>('')
    }
}

export type getUniT = {
    state_province: null
    country: string
    name: string
    web_pages: string[]
    domains: string[]
    alpha_two_code: string
}