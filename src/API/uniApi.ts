import axios, {AxiosResponse} from "axios";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://universities.hipolabs.com/search?country=United+Kingdom',
    headers: {}
})

export const uniApi = {
    async getUni() {
        await axiosInstance.get<AxiosResponse<getUniType>>('')
    }
}

export type getUniType = {
    state_province: null
    country: string
    name: string
    web_pages: string[]
    domains: string[]
    alpha_two_code: string
}