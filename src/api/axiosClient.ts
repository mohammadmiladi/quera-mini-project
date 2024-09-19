import axios from 'axios'
import applyInterceptors from './interceptors';

const BaseURL = "https://jsonplaceholder.typicode.com"

const axiosClient = axios.create({
    baseURL: BaseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})


applyInterceptors(axiosClient)

export default axiosClient;