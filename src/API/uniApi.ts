import axios from "axios";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://universities.hipolabs.com/search?country=United+Kingdom',
    headers: {}
})

export const uniApi = {
    getUni() {
        return axiosInstance.get('')
    }
}