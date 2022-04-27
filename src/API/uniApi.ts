import axios, {AxiosError, AxiosResponse} from "axios";
import {getUniT} from "../types/UniT";


const axiosInstance = axios.create({
    baseURL: 'http://universities.hipolabs.com',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const uniApi = {
    getUni: async () => {
        try {
            return await axiosInstance.get<AxiosResponse<getUniT[]>>('/search?country=United+Kingdom')
        } catch (e) {
            return console.warn(e as AxiosError)
        }
    }
}