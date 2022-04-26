import axios, {AxiosError, AxiosResponse} from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://universities.hipolabs.com',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const uniApi = {
    getUni: () => {
        try {
          return  axiosInstance.get<AxiosResponse<getUniT[]>>('/search?country=United+Kingdom')

        } catch (e) {
            return console.warn(e as AxiosError)
        }

    }
}

export type getUniT = {
    country: string
    name: string
    web_pages: string[]
    domains: string[]
    alpha_two_code: string
}